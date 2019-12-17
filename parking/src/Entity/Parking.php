<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Reusable\DateTrait;
use AppParking\Entity\ParkingType;
use AppParking\Entity\Section;
use AppParking\Entity\RentLot;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Parking
 *
 * @ORM\Table(name="parking")
 * @ORM\Entity(repositoryClass="AppParking\Repository\ParkingRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Parking
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    protected $name;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     */
    protected $description;

    /**
     * @ORM\ManyToOne(targetEntity="ParkingType", inversedBy="parkings")
     * @ORM\JoinColumn(name="parking_type_id", referencedColumnName="id")
     */
    protected $parkingType;

    /**
     * @ORM\OneToMany(targetEntity="Section", mappedBy="parking")
     */
    protected $sections;

    /**
     * @ORM\OneToMany(targetEntity="Payment", mappedBy="parking")
     */
    protected $payments;

    /**
     * @ORM\OneToMany(targetEntity="RentLot", mappedBy="parking")
     */
    protected $rentlots;

    public function __construct()
    {
        $this->sections = new ArrayCollection();
        $this->payments = new ArrayCollection();
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
     * @return Parking
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
     * @return Parking
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
     * @param Section[] $sections
     */
    public function setSections($sections)
    {
        $this->sections = $sections;
    }

    public function addSection(Section $section)
    {
        $this->sections->add($section); 
        $section->setParking($this);
    }

    /**
     * @param Section $section
     */
    public function removeSection(Section $section)
    {
        if (!$this->sections->contains($section)) {
            return;
        }
        $this->sections->removeElement($section);
        $section->setParking(null);
    }

    /**
     * @return Section[]
     */
    public function getSections()
    {
        return $this->sections;
    }

    /**
     * @param ParkingType $parkingType
     */
    public function setParkingType(ParkingType $parkingType=null)
    {
        $this->parkingType = $parkingType;
    }


    public function removeParkingType()
    {
        if($this->parkingType){
            $this->parkingType->removeParking($this);
            $this->setParkingType(null);
        }
        return $this;
    }

    /**
     * @return ParkingType
     */
    public function getParkingType()
    {
        return $this->parkingType;
    }

    /**
     * Set payment
     *
     * @param Payment[] $payments
     *
     */
    public function setPayments($payments)
    {
        $this->payments = $payments;
    }
    
    public function addPayment(Payment $payment)
    {
        $this->payments->add($payment); 
        $payment->setParking($this);
    }

    /**
     * @param Payment $payment
     */
    public function removePayment(Payment $payment)
    {
        if (!$this->payments->contains($payment)) {
            return;
        }
        $this->payments->removeElement($payment);
        $payment->setParking(null);
    }

    /**
     * Get payment
     *
     * @return Payment[]
     */
    public function getPayments()
    {
        return $this->payments;
    }

    /**
     * @param RentLot[] $rentlots
     */
    public function setRentLots($rentlots)
    {
        $this->rentlots = $rentlots;
    }

    public function addRentLot(RentLot $rentlot)
    {
        $this->rentlots->add($rentlot); 
        $rentlot->setParking($this);
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
        $rentlot->setParking(null);
    }

    /**
     * @return RentLot[]
     */
    public function getRentLots()
    {
        return $this->rentlots;
    }
}
