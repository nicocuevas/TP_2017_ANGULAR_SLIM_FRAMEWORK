<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Vehicle;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * VehicleType
 *
 * @ORM\Table(name="vehicle_type")
 * @ORM\Entity(repositoryClass="AppParking\Repository\VehicleTypeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class VehicleType
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
     * @ORM\OneToMany(targetEntity="Vehicle", mappedBy="vehicleType")
     */
    protected $vehicles;

    public function __construct()
    {
        $this->vehicles = new ArrayCollection();
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
     * @return VehicleType
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
     * @return VehicleType
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
     * @param Vehicle[] $vehicles
     */
    public function setVehicles($vehicles)
    {
        $this->vehicles = $vehicles;
    }

    public function addVehicle(Vehicle $vehicle)
    {
        $this->vehicles->add($vehicle); 
        $vehicle->setVehicleType($this);
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
        $vehicle->setVehicleType(null);
    }

    /**
     * @return Vehicle[]
     */
    public function getVehicles()
    {
        return $this->vehicles;
    }
}

