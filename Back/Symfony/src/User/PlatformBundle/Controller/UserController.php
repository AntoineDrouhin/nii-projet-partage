<?php

namespace User\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

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

    // modifie un user
    public function modificationAction(){
 

    	// $typeUser = $request->request->get('adresse');
    	// $login = $request->request->get('titre');
    	// $password = $request->request->get('email');
    	// $tel = $request->request->get('tel');
     //    $telFixe  = $request->request->get('telFixe');
    	// $image = $request->request->get('image');
    	// $images = $request->files->all();
    	// $id = 
    	// Changement en base de données
    	// $repository = $this->getDoctrine()->getRepository('UserPlatformBundle:user');
     //    $user = $repository->find($id);
     //    $user->setLogin($login);
     //    $user->setTypeUser($typeUser);
     //    $user->setPassword($password);
     //    $user->setTelephone($tel);
     //    $user->setTelephoneFixe($telFixe);


     //    $em = $this->getDoctrine()->getManager();
     //    $em->persist($contact);
        
     //    try{
     //        $em->flush();
     //    }catch(Exception $e){
     //        return new Response($e);
     //    }

     //    return new Response(json_encode(value))
    }

    // supprime un user
    public function suppressionAction(){

    }

    // connecte un user
    public function connexion(){

    }

    // deconnecte un user
    public function deconnexion(){
    }
}
