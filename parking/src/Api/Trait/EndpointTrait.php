<?php
/*
 *
 * (c) Nicolas Cuevas <nicolasgcuevas@gmail.com>
 *
 */

namespace AppParking\Api\Reusable;


trait EndpointTrait
{

    public function getRequestParams($params)
    {
        $page = 0;
        $limit = 10;
        $orderBy = NULL;
        $where = NULL;
        $format = NULL;

        if(isset($params['offset'])){
            $page = $params['offset'];
        }

        if(isset($params['limit']) && $params['limit'] < 101){
            $limit = $params['limit'];
        }

        if(isset($params['orderby'])){
            $orderBy = json_decode($params['orderby'],true);
        }

        if(isset($params['where'])){
            $where = json_decode($params['where'],true);
        }

        if(isset($params['format'])){
            $format = $params['format'];
        }

        return [
            'page' => $page,
            'limit' => $limit,
            'orderBy' => $orderBy,
            'where' => $where,
            'format' => $format
        ];
    }
    
    public function  manageFiles($request, $dir=NULL){
        $directory = $dir ? PUBLIC_FILES_PATH.$dir : PUBLIC_FILES_PATH;
        $uploadedFiles = $request->getUploadedFiles();
        $uploadedFile = $uploadedFiles['file'];
        if ($uploadedFile->getError() === UPLOAD_ERR_OK) {
            $filename = moveUploadedFile($directory, $uploadedFile);
            return $directory.$filename;
        }
    }
    
    public function moveUploadedFile($directory, UploadedFile $uploadedFile)
    {
        $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);
        $basename = bin2hex(random_bytes(8));
        $filename = sprintf('%s.%0.8s', $basename, $extension);
        $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);
        return $filename;
    }

}
