<?php

namespace User\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Symfony\Component\jms\Serializer\SerializerBuilder;

use User\PlatformBundle\Entity\user;
class UserController extends Controller
{
	// affiche la liste des user


    public function affichageAction()
    {
  		$repository = $this->getDoctrine()->getRepository('UserPlatformBundle:user');
        $users = $repository->findAll();
		$serializer = $this->get('serializer');
		$users = $serializer->serialize($users, 'json');
        return new Response($users);
    }


    public function ajoutAction(Request $request)
    {


        $params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();

       
        $typeUser = $params["typeUser"];
        $login = $params["login"];
        $password = $params["password"];
        $nom = $params["nom"];
		$prenom = $params["prenom"];
		$urlImage = $params["urlImage"];

        // $token = $params["token"];

        $user = new User();
		$user->setTypeUser($typeUser);
		$user->setLogin($login);
		$user->setPassword(md5($password));
		$user->setNom($nom);
		$user->setPrenom($prenom);
		$user->setUrlImage($urlImage);
		// $user->setToken($token);


        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        try{
            $em->flush();
        }catch(Exception $e){
            return new Response($e);
        }
        return new Response("ok");
    
    }


    // modifie un user
    public function modificationAction(Request $request){
 
  		$repository = $this->getDoctrine()->getRepository('UserPlatformBundle:user');
        $users = $repository->findAll();

        $params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();

        $id = $params["id"];
        $typeUser = $params["typeUser"];
        $login = $params["login"];
        $password = $params["password"];
        // $token = $params["token"];
        $nom = $params["nom"];
		$prenom = $params["prenom"];
		$urlImage = $params["urlImage"];

    	$repository = $this->getDoctrine()->getRepository('UserPlatformBundle:user');
    	$user = $repository->findOneBy(array("id" => $id));


		$user->setTypeUser($typeUser);
		$user->setLogin($login);
		$user->setPassword($password);
		// $user->setToken($token);
		$user->setNom($nom);
		$user->setPrenom($prenom);
		$user->setUrlImage($urlImage);


        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        try{
            $em->flush();
        }catch(Exception $e){
            return new Response($e);
        }
        return new Response("ok");

    }

    // supprime un user
    public function suppressionAction(Request $request){

    	$params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();
        $id = $params["id"];
        $user = $em->getRepository('UserPlatformBundle:user')->find($id);
        $em->remove($user);
        $em->flush();

        return new Response("ok");
    }

    // connecte un user
    public function connexionAction(Request $request){
    	$params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();
        $login = $params["login"];
        $password = md5($params["password"]);
		$user = $em->getRepository('UserPlatformBundle:user')->findOneBy(array("login" => $login, "password" => $password ));
		if($user == null){
			return new Error("login et mot de passe incorrect");
		}
		// var_dump($user);
		$token = md5(uniqid(rand(), true));
		$array = array("id" => $user->getId(),"token" =>$token);
		return new Response(json_encode($array));
    }

    // deconnecte un user
    public function deconnexionAction(){
    	$params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();

        $id = $params["id"];
		$repository = $this->getDoctrine()->getRepository('UserPlatformBundle:user');
    	$user = $repository->findOneBy(array("id" => $id));

    	$user->setToken(null);

    }
}
