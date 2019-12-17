<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\RentLot;
use AppParking\Entity\Customer;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * TODO: Add parking
 * 
 */

/**
 * Payment
 *
 * @ORM\Table(name="payment")
 * @ORM\Entity(repositoryClass="AppParking\Repository\PaymentRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Payment
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
     * @ORM\ManyToOne(targetEntity="Customer", inversedBy="vehicles")
     * @ORM\JoinColumn(name="customer_id", referencedColumnName="id")
     */
    protected $customer;

    /**
     * @ORM\ManyToOne(targetEntity="Currency", inversedBy="payments")
     * @ORM\JoinColumn(name="currency_id", referencedColumnName="id")
     */
    protected $currency;

    /**
     * @ORM\OneToMany(targetEntity="RentLot", mappedBy="payment")
     */
    protected $rentlots;

    /**
     * @ORM\ManyToOne(targetEntity="Parking", inversedBy="payments")
     * @ORM\JoinColumn(name="payment_parking_id", referencedColumnName="id")
     */
    protected $parking;

    /**
     * @var float
     *
     * @ORM\Column(name="amount", type="float")
     */
    protected $amount;

    /**
     * @ORM\ManyToOne(targetEntity="PaymentType", inversedBy="payments")
     * @ORM\JoinColumn(name="payment_type_id", referencedColumnName="id")
     */
    protected $paymentType;
    
    /**
     * @ORM\ManyToOne(targetEntity="PaymentStatus", inversedBy="payments")
     * @ORM\JoinColumn(name="payment_status_id", referencedColumnName="id")
     */
    protected $paymentStatus;

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
     * Set amount
     *
     * @param float $amount
     *
     * @return Payment
     */
    public function setAmount($amount)
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * Get amount
     *
     * @return float
     */
    public function getAmount()
    {
        return $this->amount;
    }

     /**
     * @param Customer $customer
     */
    public function setCustomer($customer)
    {
        $this->customer = $customer;
    }

    public function removeCustomer()
    {
        if($this->customer){
            $this->customer->removeVehicle($this);
            $this->setCustomer(null);
        }
        return $this;
    }

    /**
     * @return Customer
     */
    public function getCustomer()
    {
        return $this->customer;
    }

    /**
     * @param Currency $currency
     */
    public function setCurrency($currency)
    {
        $this->currency = $currency;
    }

    public function removeCurrency()
    {
        if($this->currency){
            $this->currency->removePayment($this);
            $this->setCurrency(null);
        }
        return $this;
    }

    /**
     * @return Currency
     */
    public function getCurrency()
    {
        return $this->currency;
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
        $rentlot->setPayment($this);
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
        $rentlot->setPayment(null);
    }

    /**
     * @return RentLot[]
     */
    public function getRentLots()
    {
        return $this->rentlots;
    }

    /**
     * @param Parking $parking
     */
    public function setParking($parking)
    {
        $this->parking = $parking;
    }

    /**
     * @return Parking
     */
    public function getParking()
    {
        return $this->parking;
    }

    /**
     * @param PaymentType $paymentType
     */
    public function setPaymentType($paymentType)
    {
        $this->paymentType = $paymentType;
    }

    public function removePaymentType()
    {
        if($this->paymentType){
            $this->paymentType->removePayment($this);
            $this->setPaymentType(null);
        }
        return $this;
    }

    /**
     * @return PaymentType
     */
    public function getPaymentType()
    {
        return $this->paymentType;
    }

    /**
     * @param PaymentStatus $paymentStatus
     */
    public function setPaymentStatus($paymentStatus)
    {
        $this->paymentStatus = $paymentStatus;
    }

    public function removePaymentStatus()
    {
        if($this->paymentStatus){
            $this->paymentStatus->removePayment($this);
            $this->setPaymentStatus(null);
        }
        return $this;
    }

    /**
     * @return PaymentStatus
     */
    public function getPaymentStatus()
    {
        return $this->paymentStatus;
    }
}

