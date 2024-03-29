<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\NoResultException;
use AppParking\Entity\PaymentStatus;
use AppParking\Repository\Reusable\AttributesTrait;
use Exception;

/**
 * PaymentStatusRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PaymentStatusRepository extends \Doctrine\ORM\EntityRepository
{
    use AttributesTrait;

    public function findById($id, $returnArray = TRUE)
    {   
        $result = NULL;
        $dql = "SELECT u  FROM AppParking\Entity\PaymentStatus u ".
               "WHERE u.id = '".$id."'";
        try{
            if($returnArray){
                $result = $this->getEntityManager()->createQuery($dql)->getArrayResult();
            }else{
                $result = $this->getEntityManager()->createQuery($dql)->getSingleResult();
            }
            
        }catch(NoResultException $e){
            $result = ['error'=>$e->getMessage()];
        }

        return $result;
    }

    public function findAllObjects($queryFilters)
    {   
        $result = NULL;
        $page = $queryFilters['page'];
        $limit = $queryFilters['limit'];
        $where = $queryFilters['where'];
        $orderBy = $queryFilters['orderBy'];

        $qb = $this->getEntityManager()->createQueryBuilder();
        try{
            $qb->select(array('u'))
               ->from('AppParking\Entity\PaymentStatus', 'u')
               ->setFirstResult( ($limit * ($page)) )
               ->setMaxResults( $limit );

            if($where){
                $qb->add('where','u.'.$where['field']." LIKE '%".$where['value']."%'");
            }

            if($orderBy){
                $qb->add('orderBy','u.'.$orderBy['field'].' '.$orderBy['type']);
            }

            $query = $qb->getQuery();
            $result['items'] = $query->getArrayResult();
            $pagination = $this->getPagination($query, $page, $limit);
            $result['pagination'] = $pagination;
        }catch(NoResultException $e){
            $result = ['error'=>$e->getMessage()];
        }

        return $result;
    }

    public function create($data)
    {   
        $result = NULL;
        $em = $this->getEntityManager();
        try{
            $obj = new PaymentStatus();
            $obj->setName($data['name']);
            $em->persist($obj);
            $em->flush();
        }catch(Exception $e){
            $result = ['error'=>$e->getMessage()];
        }

        return $result;
    }

    public function update($id, $data)
    {   
        $result = NULL;
        $em = $this->getEntityManager();
        try{
            $obj = $this->findById($id,FALSE);
            if(is_object($obj)){
                if(isset($data['name'])){
                    $obj->setName($data['name']);
                }
                $em->persist($obj);
                $em->flush();
            }
        }catch(Exception $e){
            $result = ['error'=>$e->getMessage()];
        }

        return $result;
    }
}
