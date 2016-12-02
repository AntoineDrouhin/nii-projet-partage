<?php

namespace FicheAchat\PlatformBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

use User\PlatformBundle\Entity\user;

/**
 * ficheAchat
 *
 * @ORM\Table(name="fiche_achat")
 * @ORM\Entity(repositoryClass="FicheAchat\PlatformBundle\Repository\ficheAchatRepository")
 */
class ficheAchat
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="produit", type="string", length=255)
     */
    private $produit;

    /**
     * @var string
     *
     * @ORM\Column(name="quantite", type="string", length=255)
     */
    private $quantite;

    /**
    * @ORM\ManyToOne(targetEntity="User\PlatformBundle\Entity\user")
    */
    private $user;

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set produit
     *
     * @param string $produit
     *
     * @return ficheAchat
     */
    public function setProduit($produit)
    {
        $this->produit = $produit;

        return $this;
    }

    /**
     * Get produit
     *
     * @return string
     */
    public function getProduit()
    {
        return $this->produit;
    }

    /**
     * Set quantite
     *
     * @param string $quantite
     *
     * @return ficheAchat
     */
    public function setQuantite($quantite)
    {
        $this->quantite = $quantite;

        return $this;
    }

    /**
     * Get quantite
     *
     * @return string
     */
    public function getQuantite()
    {
        return $this->quantite;
    }


    /**
     * Set user
     *
     * @param user $user
     *
     * @return ficheAchat
     */
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return user
     */
    public function getUser()
    {
        return $this->user;
    }
}

