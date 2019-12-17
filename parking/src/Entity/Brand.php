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
 * Brand
 *
 * @ORM\Table(name="brand")
 * @ORM\Entity(repositoryClass="AppParking\Repository\BrandRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Brand
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
     * @ORM\OneToMany(targetEntity="Vehicle", mappedBy="brand")
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
     * @return Brand
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
     * @param Vehicle[] $vehicles
     */
    public function setVehicles($vehicles)
    {
        $this->vehicles = $vehicles;
    }

    public function addVehicle(Vehicle $vehicle)
    {
        $this->vehicles->add($vehicle); 
        $vehicle->setBrand($this);
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
        $vehicle->setBrand(null);
    }

    /**
     * @return Vehicle[]
     */
    public function getVehicles()
    {
        return $this->vehicles;
    }
}
