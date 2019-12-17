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
TODO: IMPLEMENT PASSWORD SALT
*/


/**
 * User
 *
 * @ORM\Table(name="user_audit")
 * @ORM\Entity(repositoryClass="AppParking\Repository\UserAuditRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class UserAudit
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
     * @ORM\Column(name="action", type="string", length=255)
     */
    protected $action;

    /**
     * @var text
     *
     * @ORM\Column(name="meta", type="text", length=1000)
     */
    protected $meta;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="audits")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    protected $user;


    public function __construct()
    {
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
     * Set action
     *
     * @param string $action
     *
     */
    public function setAction($action)
    {
        $this->action = $action;
    }

    /**
     * Get action
     *
     * @return string
     */
    public function getAction()
    {
        return $this->action;
    }

    /**
     * Set meta
     *
     * @param string $meta
     *
     */
    public function setMeta($meta)
    {
        $this->meta = $meta;
    }

    /**
     * Get meta
     *
     * @return string
     */
    public function getMeta()
    {
        return $this->meta;
    }

    /**
     * @param User $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    public function removeUser()
    {
        if($this->user){
            $this->user->removeAudit($this);
            $this->setUser(null);
        }
        return $this;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }
}
