<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Section;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * SectionType
 *
 * @ORM\Table(name="section_type")
 * @ORM\Entity(repositoryClass="AppParking\Repository\SectionTypeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class SectionType
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
     * @ORM\OneToMany(targetEntity="Section", mappedBy="sectionType")
     */
    protected $sections;


    public function __construct()
    {
        $this->sections = new ArrayCollection();
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
     * @return SectionType
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
     * @return SectionType
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
     * @param Section[] $sections
     */
    public function setSections($sections)
    {
        $this->sections = $sections;
    }

    public function addSection(Section $section)
    {
        $this->sections->add($section); 
        $section->setSectionType($this);
    }

    /**
     * @param Section $section
     */
    public function removeSection(Section $section)
    {
        if (!$this->sections->contains($section)) {
            return;
        }
        $this->sections->removeElement($section);
        $section->setSection(null);
    }

    /**
     * @return Section[]
     */
    public function getSections()
    {
        return $this->sections;
    }

    /**
     * Generates the magic method
     * 
     */
    public function __toString(){
        // to show the name of the Category in the select
        return $this->name;
        // to show the id of the Category in the select
        // return $this->id;
    }
}
