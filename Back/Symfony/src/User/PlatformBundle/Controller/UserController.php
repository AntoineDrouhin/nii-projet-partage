<?php

namespace User\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{
	// affiche la liste des user
    public function affichageAction()
    {
  	
    }

    // modifie un user
    public function modificationAction(){
    	return $this->render('UserPlatformBundle:Default:index.html.twig');
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
