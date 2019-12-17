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
 * TODO: Add customer nulleable
 * 
 */

/**
 * Vehicle
 *
 * @ORM\Table(name="vehicle")
 * @ORM\Entity(repositoryClass="AppParking\Repository\VehicleRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Vehicle
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
     * @ORM\ManyToOne(targetEntity="Brand", inversedBy="vehicles")
     * @ORM\JoinColumn(name="vehicle_brand_id", referencedColumnName="id")
     */
    protected $brand;

    /**
     * @var string
     *
     * @ORM\Column(name="color", type="string", length=255)
     */
    protected $color;

    /**
     * @var string
     *
     * @ORM\Column(name="plate", type="string", length=255)
     */
    protected $plate;


    /**
     * @ORM\ManyToOne(targetEntity="VehicleType", inversedBy="vehicles")
     * @ORM\JoinColumn(name="vehicle_type_id", referencedColumnName="id")
     */
    protected $vehicleType;

    /**
     * @ORM\ManyToOne(targetEntity="Customer", inversedBy="vehicles")
     * @ORM\JoinColumn(name="customer_id", referencedColumnName="id")
     */
    protected $customer;

    /**
     * @ORM\OneToMany(targetEntity="RentLot", mappedBy="parking")
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
     * @param Brand $brand
     */
    public function setBrand($brand)
    {
        $this->brand = $brand;
    }

    public function removeBrand()
    {
        if($this->brand){
            $this->brand->removeVehicle($this);
            $this->setBrand(null);
        }
        return $this;
    }

    /**
     * @return Brand
     */
    public function getBrand()
    {
        return $this->brand;
    }

    /**
     * Set color
     *
     * @param string $color
     */
    public function setColor($color)
    {
        $this->color = $color;
    }

    /**
     * Get color
     *
     * @return string
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set plate
     *
     * @param string $plate
     */
    public function setPlate($plate)
    {
        $this->plate = $plate;
    }

    /**
     * Get plate
     *
     * @return string
     */
    public function getPlate()
    {
        return $this->plate;
    }

    /**
     * @param VehicleType $vehicleType
     */
    public function setVehicleType($vehicleType)
    {
        $this->vehicleType = $vehicleType;
    }

    public function removeVehicleType()
    {
        if($this->vehicleType){
            $this->vehicleType->removeVehicle($this);
            $this->setVehicleType(null);
        }
        return $this;
    }

    /**
     * @return VehicleType
     */
    public function getVehicleType()
    {
        return $this->vehicleType;
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
