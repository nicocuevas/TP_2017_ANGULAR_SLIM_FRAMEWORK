<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\RentLot;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * RentStatus
 *
 * @ORM\Table(name="rent_status")
 * @ORM\Entity(repositoryClass="AppParking\Repository\RentStatusRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class RentStatus
{
    use DateTrait;

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, unique=true)
     */
    protected $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true, nullable=true)
     */
    protected $description;

    /**
     * @ORM\OneToMany(targetEntity="RentLot", mappedBy="rentStatus")
     */
    protected $rentlots;


    public function __construct()
    {
        $this->rentlots = new ArrayCollection();
        $this->active = True;
    }

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
     * Set name
     *
     * @param string $name
     *
     * @return RentType
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return RentType
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param RentLots[] $rentlots
     */
    public function setRentLots($rentlots)
    {
        $this->rentlots = $rentlots;
    }

    public function addRentLot(RentLot $rentlot)
    {
        $this->rentlots->add($rentlot); 
        $rentlot->setRentStatus($this);
    }

    /**
     * @param RentLot $rentlot
     */
    public function removeRentLot(RentLot $rentlot)
    {
        if (!$this->rentlots->contains($rentlot)) {
            return;
        }
        $this->rentlots->removeElement($rentlot);
        $rentlot->setRentStatus(null);
    }

    /**
     * @return RentLot[]
     */
    public function getRentlots()
    {
        return $this->rentlots;
    }
}

