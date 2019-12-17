<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Reusable\DateTrait;
use DateTime;

/**
 * RentLot
 *
 * @ORM\Table(name="rent_lot")
 * @ORM\Entity(repositoryClass="AppParking\Repository\RentLotRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class RentLot
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
     * @ORM\ManyToOne(targetEntity="RentType", inversedBy="rentlots")
     * @ORM\JoinColumn(name="rent_type_id", referencedColumnName="id")
     */
    protected $rentType;

    /**
     * @ORM\ManyToOne(targetEntity="RentStatus", inversedBy="rentlots")
     * @ORM\JoinColumn(name="rent_status_id", referencedColumnName="id")
     */
    protected $rentStatus;

    /**
     * @ORM\ManyToOne(targetEntity="Lot", inversedBy="rentlots")
     * @ORM\JoinColumn(name="rent_lot_id", referencedColumnName="id")
     */
    protected $lot;

    /**
     * @ORM\ManyToOne(targetEntity="Payment", inversedBy="rentlots")
     * @ORM\JoinColumn(name="rent_payment_id", referencedColumnName="id", nullable=true)
     */
    protected $payment;


    /**
     * @ORM\ManyToOne(targetEntity="Parking", inversedBy="rentlots")
     * @ORM\JoinColumn(name="rent_parking_id", referencedColumnName="id")
     */
    protected $parking;

    /**
     * One Vehicle has Many RentLot.
     * @ORM\ManyToOne(targetEntity="Vehicle", inversedBy="rentlots")
     * @ORM\JoinColumn(name="vehicle_id", referencedColumnName="id")
     */
    private $vehicle;

    /**
     * @var datetime $startTime
     *
     * @ORM\Column(name="start_time", type="datetime")
     */
    private $startTime;

    /**
     * @var datetime $endTime
     *
     * @ORM\Column(name="end_time", type="datetime", nullable=true)
     */
    private $endTime;

    
    public function __construct()
    {
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
     * Set vehicle
     *
     * @param Vehicle $vehicle
     *
     */
    public function setVehicle($vehicle)
    {
        $this->vehicle = $vehicle;
    }

    /**
     * Get vehicle
     *
     * @return Vehicle
     */
    public function getVehicle()
    {
        return $this->vehicle;
    }

    public function removeVehicle()
    {
        if($this->vehicle){
            $this->vehicle->removeRentLot($this);
            $this->setVehicle(null);
        }
        return $this;
    }

    /**
     * Set rentType
     *
     * @param RentType $rentType
     *
     */
    public function setRentType($rentType)
    {
        $this->rentType = $rentType;
    }

    public function removeRentType()
    {
        if($this->rentType){
            $this->rentType->removeRentLot($this);
            $this->setRentType(null);
        }
        return $this;
    }

    /**
     * Get rentType
     *
     * @return RentType
     */
    public function getRentType()
    {
        return $this->rentType;
    }

    /**
     * Set rentStatus
     *
     * @param RentStatus $rentStatus
     *
     */
    public function setRentStatus($rentStatus)
    {
        $this->rentStatus = $rentStatus;
    }

    public function removeRentStatus()
    {
        if($this->rentStatus){
            $this->rentStatus->removeRentLot($this);
            $this->setRentStatus(null);
        }
        return $this;
    }

    /**
     * Get rentStatus
     *
     * @return RentStatus
     */
    public function getRentStatus()
    {
        return $this->rentStatus;
    }

    /**
     * Set lot
     *
     * @param Lot $lot
     *
     */
    public function setLot($lot)
    {
        $this->lot = $lot;
    }

    public function removeLot()
    {
        if($this->lot){
            $this->lot->removeRentLot($this);
            $this->setLot(null);
        }
        return $this;
    }

    /**
     * Get lot
     *
     * @return Lot
     */
    public function getLot()
    {
        return $this->lot;
    }

    /**
     * Set payment
     *
     * @param Payment $payment
     *
     */
    public function setPayment($payment)
    {
        $this->payment = $payment;
    }

    public function removePayment()
    {
        if($this->payment){
            $this->payment->removeRentLot($this);
            $this->setPayment(null);
        }
        return $this;
    }

    /**
     * Get payment
     *
     * @return Payment
     */
    public function getPayment()
    {
        return $this->payment;
    }

    /**
     * Set payment
     *
     * @param Parking $parking
     *
     */
    public function setParking($parking)
    {
        $this->parking = $parking;
    }

    public function removeParking()
    {
        if($this->parking){
            $this->parking->removeRentLot($this);
            $this->setParking(null);
        }
        return $this;
    }

    /**
     * Get payment
     *
     * @return Parking
     */
    public function getParking()
    {
        return $this->parking;
    }

    /**
     * Set startTime
     *
     * @ORM\PrePersist 
     */
    public function setStartTime()
    {
        $this->startTime = new DateTime();  
    }

    /**
     * Get startTime
     *
     * @return datetime
     */
    public function getStartTime()
    {
        return $this->startTime;
    }

    /**
     * Set endTime
     */
    public function setEndTime(DateTime $date)
    {
        $this->endTime = $date;  
    }

    /**
     * Get endTime
     *
     * @return datetime
     */
    public function getEndTime()
    {
        return $this->endTime;
    }
}

