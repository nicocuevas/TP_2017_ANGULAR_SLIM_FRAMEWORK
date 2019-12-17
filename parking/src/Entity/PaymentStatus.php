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
 * PaymentStatus
 *
 * @ORM\Table(name="payment_status")
 * @ORM\Entity(repositoryClass="AppParking\Repository\PaymentStatusRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class PaymentStatus
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
     * @ORM\Column(name="decription", type="string", length=255, nullable=true)
     */
    protected $decription;

    /**
     * @ORM\OneToMany(targetEntity="Payment", mappedBy="paymentStatus")
     */
    protected $payments;

    public function __construct()
    {
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
     * Set name
     *
     * @param string $name
     *
     * @return PaymentStatus
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
     * Set decription
     *
     * @param string $decription
     *
     * @return PaymentStatus
     */
    public function setDecription($decription)
    {
        $this->decription = $decription;

        return $this;
    }

    /**
     * Get decription
     *
     * @return string
     */
    public function getDecription()
    {
        return $this->decription;
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
        $payment->setPaymentStatus($this);
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
        $payment->setPaymentStatus(null);
    }

    /**
     * @return Payment[]
     */
    public function getPayments()
    {
        return $this->payments;
    }
}

