<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Repository\Reusable;

use Doctrine\ORM\Tools\Pagination\Paginator;
use DateTime;


trait AttributesTrait
{

    public function getPagination($query= null, $offset=1, $limit=10){
        $pagination = [];
        if($query){
            $paginator = new Paginator($query, $fetchJoinCollection = true);
            $totalItems = count($paginator);
            $pagesCount = ceil($totalItems / $limit);
            $pagination['total_items'] = $totalItems;
            $pagination['page_counts'] = $pagesCount;
            $pagination['offset'] = (($offset - 1) < 0 ) ? 0 : $offset - 1;;
            $pagination['page'] = $offset + 1;
            $pagination['prev'] = (($offset - 1) < 0 ) ? null : $offset - 1;
            $pagination['next'] = (($offset + 1) > $pagesCount) ? null : $offset + 1;
            $pagination['limit'] = $limit;
        }
        
        return $pagination;
    }

    public function addFilters($qb, $where, $orderBy){
        if($where){
            foreach ($where['filters'] as $value) {

                if(isset($value['format']) && $value['format'] == 'date'){
                    $date = new DateTime($value['value']);
                    $value['value'] = "'".$date->format('Y-m-d')."'";
                }

                if($value['value']===FALSE){
                    $value['value'] = 0;
                }elseif($value['value']===TRUE){
                    $value['value'] = 1;
                }

                if(isset($value['type']) && $value['type'] == 'eq'){
                    $qb->andWhere($qb->expr()->eq($value['field'],$value['value']));
                }elseif(isset($value['type']) && $value['type'] == 'or'){
                    $qb->orWhere($value['field']." = ".$value['value']);
                }elseif(isset($value['type']) && $value['type'] == 'lt'){
                    $qb->andWhere($qb->expr()->lt($value['field'],$value['value']));
                }elseif(isset($value['type']) && $value['type'] == 'lte'){
                    $qb->andWhere($qb->expr()->lte($value['field'],$value['value']));
                }elseif(isset($value['type']) && $value['type'] == 'gt'){
                    $qb->andWhere($qb->expr()->gt($value['field'],$value['value']));
                }elseif(isset($value['type']) && $value['type'] == 'gte'){
                    $qb->andWhere($qb->expr()->gte($value['field'],$value['value']));
                }else{
                    $qb->andWhere($value['field']." LIKE '%".$value['value']."%'");
                }

            }
        }

        if($orderBy){
            $qb->add('orderBy', $orderBy['field'].' '.$orderBy['type']);
        }

        return $qb;
    }
    
}
