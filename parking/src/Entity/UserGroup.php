<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\Reusable\DateTrait;

/**
 * UserGroup
 *
 * @ORM\Table(name="user_group")
 * @ORM\Entity(repositoryClass="AppParking\Repository\UserGroupRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class UserGroup
{

    use DateTrait;

    /**
     * @var int|null
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer", name="id")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    protected $name;

    /**
     * Set name
     *
     * @param string $name
     *
     */
    public function setName($name)
    {
        $this->name = $name;
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
     * @var \Doctrine\Common\Collections\Collection|User[]
     *
     * @ORM\ManyToMany(targetEntity="User", mappedBy="userGroups")
     */
    protected $users;
    /**
     * Default constructor, initializes collections
     */
    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->active = True;
    }
    /**
     * @param User $user
     */
    public function addUser(User $user)
    {
        if ($this->users->contains($user)) {
            return;
        }
        $this->users->add($user);
        $user->addUserGroup($this);
    }
    
    /**
     * @param User $user
     */
    public function removeUser(User $user)
    {
        if (!$this->users->contains($user)) {
            return;
        }
        $this->users->removeElement($user);
        $user->removeUserGroup($this);
    }
}
