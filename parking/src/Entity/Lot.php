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
 * Lot
 *
 * @ORM\Table(name="lot")
 * @ORM\Entity(repositoryClass="AppParking\Repository\LotRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Lot
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
     * @ORM\Column(name="reference", type="string", length=255)
     */
    protected $reference;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    protected $description;

    /**
     * @ORM\ManyToOne(targetEntity="Section", inversedBy="lots")
     * @ORM\JoinColumn(name="section_lot_id", referencedColumnName="id")
     */
    protected $section;

    /**
     * @var bool
     *
     * @ORM\Column(name="available", type="boolean", options={"default" = true})
     */
    protected $available;

    /**
     * @var bool
     *
     * @ORM\Column(name="reserved", type="boolean", options={"default" = false})
     */
    protected $reserved;

    /**
     * @ORM\OneToMany(targetEntity="RentLot", mappedBy="lot")
     */
    protected $rentlots;


    public function __construct()
    {
        $this->rentlots = new ArrayCollection();
        $this->active = True;
        $this->available = True;
        $this->reserved = False;
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
     * Set reference
     *
     * @param string $reference
     *
     * @return Lot
     */
    public function setReference($reference)
    {
        $this->reference = $reference;

        return $this;
    }

    /**
     * Get reference
     *
     * @return string
     */
    public function getReference()
    {
        return $this->reference;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Lot
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
     * Set available
     *
     * @param bool $available
     *
     * @return Lot
     */
    public function setAvailable($available)
    {
        $this->available = $available;

        return $this;
    }

    /**
     * Get available
     *
     * @return bool
     */
    public function getAvailable()
    {
        return $this->available;
    }

    /**
     * Set reserved
     *
     * @param bool $reserved
     *
     * @return Lot
     */
    public function setReserved($reserved)
    {
        $this->reserved = $reserved;

        return $this;
    }

    /**
     * Get reserved
     *
     * @return bool
     */
    public function getReserved()
    {
        return $this->reserved;
    }

    /**
     * @param Section $section
     */
    public function setSection($section)
    {
        $this->section = $section;
    }

    public function removeSection()
    {
        if($this->section){
            $this->section->removeLot($this);
            $this->setSection(null);
        }
        return $this;
    }

    /**
     * @return Section
     */
    public function getSection()
    {
        return $this->section;
    }

    /**
     * @param RentLots[] $rentlots
     */
    public function setRentlots($rentlots)
    {
        $this->rentlots = $rentlots;
    }
    
    public function addRentLot(RentLot $rentlot)
    {
        $this->rentlots->add($rentlot); 
        $rentlot->setLot($this);
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
        $rentlot->setLot(null);
    }

    /**
     * @return Rentlots[]
     */
    public function getRentlots()
    {
        return $this->rentlots;
    }
}
