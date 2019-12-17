<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Reusable\DateTrait;
use AppParking\Entity\Parking;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * ParkingType
 *
 * @ORM\Table(name="parking_type")
 * @ORM\Entity(repositoryClass="AppParking\Repository\ParkingTypeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class ParkingType
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
     * @ORM\OneToMany(targetEntity="Parking", mappedBy="parkingType")
     */
    protected $parkings;


    public function __construct()
    {
        $this->parkings = new ArrayCollection();
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
     * @return TypeStatus
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
     * @return TypeStatus
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
     * @param Parking[] $parkings
     */
    public function setParkings($parkings)
    {
        $this->parkings = $parkings;
    }

    public function addParking(Parking $parking)
    {
        $this->parkings->add($parking); 
        $parking->setParkingType($this);
    }

    /**
     * @param Parking $parking
     */
    public function removeParking(Parking $parking)
    {
        if (!$this->parkings->contains($parking)) {
            return;
        }
        $this->parkings->removeElement($parking);
        $parking->setParkingType(null);
    }

    /**
     * @return Parking[]
     */
    public function getParkings()
    {
        return $this->parkings;
    }
}
