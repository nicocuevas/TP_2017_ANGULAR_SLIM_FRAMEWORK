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
 * Currency
 *
 * @ORM\Table(name="currency")
 * @ORM\Entity(repositoryClass="AppParking\Repository\CurrencyRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Currency
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
     * @ORM\Column(name="description", type="string", length=255)
     */
    protected $description;

    /**
     * @var string
     *
     * @ORM\Column(name="short_name", type="string", length=20)
     */
    protected $shortName;

    /**
     * @var string
     *
     * @ORM\Column(name="symbol", type="string", length=10, nullable=true)
     */
    protected $symbol;

    /**
     * @ORM\OneToMany(targetEntity="Payment", mappedBy="currency")
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
     * @return Currency
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
     * @return Currency
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
     * Set shortName
     *
     * @param string $shortName
     *
     * @return Currency
     */
    public function setShortName($shortName)
    {
        $this->shortName = $shortName;

        return $this;
    }

    /**
     * Get shortName
     *
     * @return string
     */
    public function getShortName()
    {
        return $this->shortName;
    }

    /**
     * Set symbol
     *
     * @param string $symbol
     *
     * @return Currency
     */
    public function setSymbol($symbol)
    {
        $this->symbol = $symbol;

        return $this;
    }

    /**
     * Get symbol
     *
     * @return string
     */
    public function getSymbol()
    {
        return $this->symbol;
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
        $payment->setCurrency($this);
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
        $payment->setCurrency(null);
    }

    /**
     * @return Payment[]
     */
    public function getPayments()
    {
        return $this->payments;
    }
}

