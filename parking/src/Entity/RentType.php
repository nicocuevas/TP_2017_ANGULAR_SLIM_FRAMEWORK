<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * RentType
 *
 * @ORM\Table(name="rent_type")
 * @ORM\Entity(repositoryClass="AppParking\Repository\RentTypeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class RentType
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
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    protected $description;

    /**
     * @ORM\OneToMany(targetEntity="RentLot", mappedBy="rentType")
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
        $rentlot->setRentType($this);
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
        $rentlot->setRentType(null);
    }

    /**
     * @return RentLot[]
     */
    public function getRentlots()
    {
        return $this->rentlots;
    }
}

