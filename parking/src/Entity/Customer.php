<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Vehicle;
use AppParking\Entity\Payment;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Customer
 *
 * @ORM\Table(name="customer")
 * @ORM\Entity(repositoryClass="AppParking\Repository\CustomerRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Customer
{

    use DateTrait;
    
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="first_name", type="string", length=150, nullable=true)
     */
    protected $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=150, nullable=true)
     */
    protected $lastName;

    /**
     * @var string
     *
     * @ORM\Column(name="phone_number", type="string", length=150, nullable=true)
     */
    protected $phoneNumber;

    /**
     * @ORM\OneToMany(targetEntity="Vehicle", mappedBy="customer")
     */
    protected $vehicles;

    /**
     * @ORM\OneToMany(targetEntity="Payment", mappedBy="customer")
     */
    protected $payments;


    public function __construct()
    {
        $this->vehicles = new ArrayCollection();
        $this->payments = new ArrayCollection();
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
     * Set firstName
     *
     * @param string $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * Get firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set phoneNumber
     *
     * @param string $phoneNumber
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;
    }

    /**
     * Get phoneNumber
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }

    /**
     * @param Vehicle[] $vehicles
     */
    public function setVehicles($vehicles)
    {
        $this->vehicles = $vehicles;
    }

    public function addVehicle(Vehicle $vehicle)
    {
        $this->vehicles->add($vehicle); 
        $vehicle->setCustomer($this);
    }

    /**
     * @param Vehicle $vehicle
     */
    public function removeVehicle(Vehicle $vehicle)
    {
        if (!$this->vehicles->contains($vehicle)) {
            return;
        }
        $this->vehicles->removeElement($vehicle);
        $vehicle->setCustomer(null);
    }

    /**
     * @return Vehicle[]
     */
    public function getVehicles()
    {
        return $this->vehicles;
    }

    /**
     * @param Payment[] $payments
     */
    public function setPayments($payments)
    {
        $this->payments = $payments;
    }

    public function addPayment(Payment $payment)
    {
        $this->payments->add($payment); 
        $payment->setCustomer($this);
    }

    /**
     * @param Vehicle $vehicle
     */
    public function removePayment(Payment $payment)
    {
        if (!$this->payments->contains($payment)) {
            return;
        }
        $this->payments->removeElement($payment);
        $payment->setCustomer(null);
    }

    /**
     * @return Payment[]
     */
    public function getPayments()
    {
        return $this->payments;
    }
}
