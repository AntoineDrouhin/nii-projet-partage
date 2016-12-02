<?php

namespace Produit\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

use Produit\PlatformBundle\Entity\produit;

class ProduitController extends Controller
{
    public function affichageAction()
    {
  		$repository = $this->getDoctrine()->getRepository('ProduitPlatformBundle:produit');
        $produits = $repository->findAll();
		$serializer = $this->get('serializer');
		$produits = $serializer->serialize($produits, 'json');
        return new Response($produits);
    	// return new Response("bonjour");
    }


    public function ajoutAction(Request $request)
    {

        $params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();

       
        $nom = $params["nom"];
        $prix = $params["prix"];
        $description = $params["description"];
        // $token = $params["token"];

        $produit = new Produit();
		$produit->setNom($nom);
		$produit->setPrix($prix);
		$produit->setDescription($description);
		// $user->setToken($token);


        $em = $this->getDoctrine()->getManager();
        $em->persist($produit);
        try{
            $em->flush();
        }catch(Exception $e){
            return new Response($e);
        }
        return new Response("ok");
    
    }


    // modifie un user
    public function modificationAction(Request $request){
 
  		$repository = $this->getDoctrine()->getRepository('ProduitPlatformBundle:produit');
        $produits = $repository->findAll();

        $params = array();
        $content = $request->getContent();
        $params = json_decode($content ,true); 
        $em = $this->getDoctrine()->getManager();

        $id = $params["id"];
        $nom = $params["nom"];
        $prix = $params["prix"];
        $description = $params["description"];

    	$repository = $this->getDoctrine()->getRepository('ProduitPlatformBundle:produit');
    	$produit = $repository->findOneBy(array("id" => $id));

		$produit->setNom($nom);
		$produit->setPrix($prix);
		$produit->setDescription($description);


        $em = $this->getDoctrine()->getManager();
        $em->persist($produit);
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
        $produit = $em->getRepository('ProduitPlatformBundle:produit')->find($id);
        $em->remove($produit);
        $em->flush();

        return new Response("ok");
    }
}
