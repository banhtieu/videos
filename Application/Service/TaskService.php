<?php

/**
 * Service for task processing...
 * @base(/tasks)
 **/

namespace Application\Service;

use Application\Model\Video;
use Core\Database\Collection;
use Core\Database\Repository;

class TaskService {

    /**
     * @var Collection
     */
    protected $collection;

    /**
     * get all tasks
     * @get(/)
     */
    public function getAll() {
        $query = $this->collection->buildQuery();
        return $query->findAll();
    }
}