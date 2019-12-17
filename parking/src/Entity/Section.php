<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Lot;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;


/**
 * Section
 *
 * @ORM\Table(name="section")
 * @ORM\Entity(repositoryClass="AppParking\Repository\SectionRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Section
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
     * @ORM\ManyToOne(targetEntity="Parking", inversedBy="sections")
     * @ORM\JoinColumn(name="section_parking_id", referencedColumnName="id")
     */
    protected $parking;

    /**
     * @ORM\ManyToOne(targetEntity="SectionType", inversedBy="sections")
     * @ORM\JoinColumn(name="section_type_id", referencedColumnName="id")
     */
    protected $sectionType;

    /**
     * @ORM\OneToMany(targetEntity="Lot", mappedBy="section")
     */
    protected $lots;


    public function __construct()
    {
        $this->lots = new ArrayCollection();
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
     * @return Section
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
     * @param Lots[] $lots
     */
    public function setLots($lots)
    {
        $this->lots = $lots;
    }

    public function addLot(Lot $lot)
    {
        $this->lots->add($lot); 
        $lot->setSection($this);
    }

    /**
     * @param Lot $lot
     */
    public function removeLot(Lot $lot)
    {
        if (!$this->lots->contains($lot)) {
            return;
        }
        $this->lots->removeElement($lot);
        $lot->setSection(null);
    }

    /**
     * @return Lots[]
     */
    public function getLots()
    {
        return $this->lots;
    }

    /**
     * @param SectionType $sectionType
     */
    public function setSectionType($sectionType)
    {
        $this->sectionType = $sectionType;
    }

    public function removeSectionType()
    {
        if($this->sectionType){
            $this->sectionType->removeSection($this);
            $this->setSectionType(null);
        }
        return $this;
    }

    /**
     * @return SectionType
     */
    public function getSectionType()
    {
        return $this->sectionType;
    }

    /**
     * @param Parking $parking
     */
    public function setParking($parking)
    {
        $this->parking = $parking;
    }

    public function removeParking()
    {
        if($this->parking){
            $this->parking->removeSection($this);
            $this->setParking(null);
        }
        return $this;
    }

    /**
     * @return Parking
     */
    public function getParking()
    {
        return $this->parking;
    }
}
