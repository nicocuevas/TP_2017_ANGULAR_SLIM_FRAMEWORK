<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Entity;

use Doctrine\ORM\Mapping as ORM;
use AppParking\Entity\UserGroup;
use AppParking\Entity\UserAudit;
use AppParking\Entity\File;
use AppParking\Entity\Reusable\DateTrait;
use Doctrine\Common\Collections\ArrayCollection;


/**
TODO: IMPLEMENT PASSWORD SALT
*/


/**
 * User
 *
 * @ORM\Table(name="user")
 * @ORM\Entity(repositoryClass="AppParking\Repository\UserRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class User
{
    use DateTrait;

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="first_name", type="string", length=150)
     */
    protected $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=150)
     */
    protected $lastName;

    /**
     * @var string
     *
     * @ORM\Column(name="phone_number", type="string", length=150, nullable=true)
     */
    protected $phoneNumber;

    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=250)
     */
    protected $username;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=250)
     */
    protected $email;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="text")
     */
    protected $password;

    /**
     * @var bool
     *
     * @ORM\Column(name="lock_user", type="boolean", options={"default" = false})
     */
    protected $lockUser;

    /**
     * @var \Doctrine\Common\Collections\Collection|UserGroup[]
     *
     * @ORM\ManyToMany(targetEntity="UserGroup", inversedBy="users")
     * @ORM\JoinTable(
     *  name="user_usergroup",
     *  joinColumns={
     *      @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     *  },
     *  inverseJoinColumns={
     *      @ORM\JoinColumn(name="usergroup_id", referencedColumnName="id")
     *  }
     * )
     */
    protected $userGroups;

    /**
     * @ORM\OneToMany(targetEntity="UserAudit", mappedBy="user")
     */
    protected $audits;

    /**
     * Many User have Many Files.
     * @ORM\ManyToMany(targetEntity="File")
     * @ORM\JoinTable(name="users_files",
     *      joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="file_id", referencedColumnName="id")}
     *      )
     */
    protected  $files;


    public function __construct()
    {
        $this->userGroups = new ArrayCollection();
        $this->audits = new ArrayCollection();
        $this->files = new ArrayCollection();
        $this->active = True;
        $this->lockUser = False;
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
     * Set firstName
     *
     * @param string $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * Get firstName
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * Get lastName
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set phoneNumber
     *
     * @param string $phoneNumber
     */
    public function setPhoneNumber($phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;
    }

    /**
     * Get phoneNumber
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->phoneNumber;
    }


    /**
     * Set username
     *
     * @param string $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * Get username
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set email
     *
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    
    /**
     * Get password
     *
     * @return array 
     */
    public function getUserGroups()
    {
        return $this->userGroups;
    }


    /**
     * @param UserGroup $userGroup
     */
    public function addUserGroup(UserGroup $userGroup)
    {
        if ($this->userGroups->contains($userGroup)) {
            return;
        }
        $this->userGroups->add($userGroup);
        $userGroup->addUser($this);
    }

    /**
     * @param UserGroup $userGroup
     */
    public function removeUserGroup(UserGroup $userGroup)
    {
        if (!$this->userGroups->contains($userGroup)) {
            return;
        }
        $this->userGroups->removeElement($userGroup);
        $userGroup->removeUser($this);
    }

    /**
     * @param UserAudit $audit
     */
    public function addAudit(UserAudit $audit)
    {
        if ($this->audits->contains($audit)) {
            return;
        }
        $this->audits->add($audit);
        $audit->setUser($this);
    }
    /**
     * @param UserAudit $audit
     */
    public function removeAudit(UserAudit $audit)
    {
        if (!$this->audits->contains($audit)) {
            return;
        }
        $this->audits->removeElement($audit);
        $audit->setUser(null);
    }

    public function getArrayData(){
        return [
            "id" => $this->id,
            "firstName" => $this->firstName,
            "lastName" => $this->lastName,
            "phoneNumber" => $this->phoneNumber,
            "username" => $this->username,
            "email" => $this->email
        ];
    }

    /**
     * Set lock
     *
     * @param bool $lock
     *
     * @return User
     */
    public function setLockUser($lock)
    {
        $this->lockUser = $lock;

        return $this;
    }

    /**
     * Get lock
     *
     * @return bool
     */
    public function getLockUser()
    {
        return $this->lockUser;
    }

    /**
     * @param File $file
     */
    public function addFile(File $file)
    {
        if ($this->files->contains($file)) {
            return;
        }
        $this->files->add($file);
    }

    /**
     * @param File $file
     */
    public function removeFile(File $file)
    {
        if (!$this->files->contains($file)) {
            return;
        }
        $this->files->removeElement($file);
    }

    /**
     * @return File[]
     */
    public function getFiles()
    {
        return $this->files;
    }

}
