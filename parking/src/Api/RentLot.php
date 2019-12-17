<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */
namespace AppParking\Api;

use AppParking\Middleware\CommonMiddleware;
use AppParking\Api\Reusable\EndpointTrait;


$app->group(API_ROUTE, function () use ($app, $entityManager) {

    $app->group('/rentlot', function () use ($app, $entityManager){
        
        $app->get('/all[/]', function ($request, $response, $args) use ($entityManager) {

            $params = $request->getAttribute('params');

            $query = EndpointTrait::getRequestParams($params);
            
            $list = $entityManager->getRepository('AppParking\Entity\RentLot')
                                  ->findAllObjects($query);
            if(isset($list['error'])){
               return $response->withJson(['response'=>'nok','message'=>$list['error']], 200);
            }
            return $response->withJson($list, 200);
        });

        $app->get('/{id}[/]', function ($request, $response, $args) use ($entityManager) {
            $obj = NULL;
            if(isset($args['id'])){
                $obj = $entityManager->getRepository('AppParking\Entity\RentLot')
                              ->findById($args['id']);
                if(isset($obj['error'])){
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
            }else{
                return $response->withJson(['response'=>'nok'], 400);
            }

            return $response->withJson($obj[0], 200);
        });

        $app->post('[/]', function ($request, $response, $args) use ($entityManager){
            $obj = NULL;
            $params = $request->getAttribute('params');
            $user = $request->getAttribute('user');
            $em = $entityManager;
            $audit = $em->getRepository('AppParking\Entity\UserAudit');
            if($params){
                $em = $entityManager->getRepository('AppParking\Entity\RentLot');
                $obj = $em->create($params);
                if(isset($obj['error'])){
                    $audit->createSimpleAudit($user->id,"CREATE_RENTLOT_FAIL", json_encode(["params"=>$params],true));
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
                $audit->createSimpleAudit($user->id,"CREATE_RENTLOT", json_encode(["params"=>$params],true));
            }else{
                $audit->createSimpleAudit($user->id,"CREATE_RENTLOT_FAIL", json_encode(["params"=>$params],true));
                return $response->withJson(['response'=>'nok'], 400);
            }
            
            return $response->withJson(['response'=>'ok','message'=>'object created'], 201);
        });

        $app->put('/{id}[/]', function ($request, $response, $args) use ($entityManager){
            $obj = NULL;
            $params = $request->getAttribute('params');
            $user = $request->getAttribute('user');
            $em = $entityManager;
            $audit = $em->getRepository('AppParking\Entity\UserAudit');
            if(isset($args['id']) && $params){
                $obj = $em->getRepository('AppParking\Entity\RentLot')->update($args['id'], $params);
                $audit->createSimpleAudit($user->id,"UPDATE_RENTLOT", json_encode(["params"=>$params],true));
                if(isset($obj['error'])){
                   $audit->createSimpleAudit($user->id,"UPDATE_RENTLOT_FAIL", json_encode(["params"=>$params],true));
                   return $response->withJson(['response'=>'nok','message'=>$obj['error']], 200);
                }
            }else{
                $audit->createSimpleAudit($user->id,"UPDATE_RENTLOT_FAIL", json_encode(["params"=>$params],true));
                return $response->withJson(['response'=>'nok'], 400);
            }
            

            return $response->withJson(['response'=>'ok','message'=>'object updated'], 200);
        });
        
        $app->patch('[/]', function ($request, $response, $args) use ($entityManager){

            return $response->withJson(['response'=>'ok','message'=>'not implemented yet'], 200);
        });

        $app->delete('/{id}[/]', function ($request, $response, $args) use ($entityManager){

            return $response->withJson(['response'=>'ok','message'=>'not implemented yet'], 200);
        });

        $app->get('/reporting/lots', function ($request, $response, $args) use ($entityManager) {

            $params = $request->getAttribute('params');

            $query = EndpointTrait::getRequestParams($params);
            
            $list = $entityManager->getRepository('AppParking\Entity\RentLot')
                                  ->generateLotsReportData($query);
            if(isset($list['error'])){
               return $response->withJson(['response'=>'nok','message'=>$list['error']], 200);
            }
            return $response->withJson($list, 200);
        });

        $app->get('/reporting/billing', function ($request, $response, $args) use ($entityManager) {

            $params = $request->getAttribute('params');

            $query = EndpointTrait::getRequestParams($params);
            
            $list = $entityManager->getRepository('AppParking\Entity\RentLot')
                                  ->generateBillingReportData($query);

            if(isset($list['error'])){
               return $response->withJson(['response'=>'nok','message'=>$list['error']], 200);
            }

            if(isset($params['format'])){
              $pdf = new \FPDF();
              $pdf->AddPage();
              $pdf->SetFont('Arial','B',10);
              $pdf->Cell(40,10,'Billing:');
              $pdf->Cell(40,10,'Time:'.date('Y-m-d'));
              $pdf->Ln();
              $pdf->Cell(40,10,'Total Vehicles:');
              $pdf->Ln();
              $pdf->Cell(40,10,$list['total_vehicles']);
              $pdf->Ln();
              $pdf->Cell(40,10,'Total Unique Vehicles: ');
              $pdf->Ln();
              $pdf->Cell(40,10,$list['total_vehicles_distinct']);
              $pdf->Ln();
              $pdf->Cell(40,10,'Total Earn:');
              $pdf->Ln();
              $pdf->Cell(40,10,$list['total_vehicles_amount']);
              $pdf->Ln();
              $pdf->Cell(40,20,"-------------------------------------------");
              $pdf->Ln();

              $pdf->Cell(50,10,"Vehicle");
              $pdf->Cell(50,10,"Rented Times");
              $pdf->Cell(50,10,"Total Amount");
              $pdf->Ln();
              foreach ($list['items'] as $value) {
                $pdf->Cell(50,10,$value['vehicle']['plate']);
                $pdf->Cell(50,10,$value['rent_times']);
                $pdf->Cell(50,10,$value['total_amount']);
                $pdf->Ln();
              }
              
              
              $pdf->Output(PUBLIC_FILES_PATH.'tmp_report.pdf','f');
              return $response->withJson('tmp_report.pdf', 200);
            }
            return $response->withJson($list, 200);
        });

        $app->get('/reporting/average', function ($request, $response, $args) use ($entityManager) {

            $params = $request->getAttribute('params');

            $query = EndpointTrait::getRequestParams($params);
            
            $list = $entityManager->getRepository('AppParking\Entity\RentLot')
                                  ->generateAverageReportData($query);
            if(isset($list['error'])){
               return $response->withJson(['response'=>'nok','message'=>$list['error']], 200);
            }

            if(isset($params['format'])){
              $pdf = new \FPDF();
              $pdf->AddPage();
              $pdf->SetFont('Arial','B',10);
              $pdf->Cell(40,10,'Average Billing:');
              $pdf->Cell(40,10,'Time:'.date('Y-m-d'));
              $pdf->Ln();
              $pdf->Cell(40,10,'Total Amount Average:');
              $pdf->Ln();
              $pdf->Cell(40,10,$list['total_amount_average']);
              $pdf->Ln();
              $pdf->Cell(40,20,"-------------------------------------------");
              $pdf->Ln();

              $pdf->Cell(50,10,"Lot");
              $pdf->Cell(50,10,"Section");
              $pdf->Cell(50,10,"Reserved");
              $pdf->Cell(50,10,"Amount Average");
              $pdf->Ln();
              foreach ($list['lots'] as $value) {
                $pdf->Cell(50,10,$value['lot']['reference']);
                $pdf->Cell(50,10,$value['lot']['section']['name']);
                $pdf->Cell(50,10,$value['lot']['reserved']?'yes':'no');
                $pdf->Cell(50,10,$value['amount_average']);
                $pdf->Ln();
              }
              $pdf->Cell(40,20,"-------------------------------------------");
              $pdf->Ln();
              $pdf->Cell(50,10,"Vehicle");
              $pdf->Cell(50,10,"Amount Average");
              $pdf->Ln();
              foreach ($list['vehicles'] as $value) {
                $pdf->Cell(50,10,$value['vehicle']['plate']);
                $pdf->Cell(50,10,$value['amount_average']);
                $pdf->Ln();
              }
              
              $pdf->Output(PUBLIC_FILES_PATH.'tmp_report.pdf','f');
              return $response->withJson('tmp_report.pdf', 200);
            }
            return $response->withJson($list, 200);
        });

        // TODO : Add info endpoint

    });
})->add(new CommonMiddleware());
