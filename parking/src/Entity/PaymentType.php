<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Payment;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * PaymentType
 *
 * @ORM\Table(name="payment_type")
 * @ORM\Entity(repositoryClass="AppParking\Repository\PaymentTypeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class PaymentType
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
     * @ORM\OneToMany(targetEntity="Payment", mappedBy="paymentType")
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
     * @return PaymentType
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
     * @return PaymentType
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
     * @param Payment[] $payments
     */
    public function setPayments($payments)
    {
        $this->payments = $payments;
    }

    public function addPayment(Payment $payment)
    {
        $this->payments->add($payment); 
        $payment->setPaymentType($this);
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
        $payment->setPaymentType(null);
    }

    /**
     * @return Payment[]
     */
    public function getPayments()
    {
        return $this->payments;
    }
}

