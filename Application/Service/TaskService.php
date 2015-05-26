<?php

namespace Application\Service;

use Application\Model\Task;
use Core\Database\Collection;
use Core\Database\Repository;

/**
 * Class TaskService
 * @package Application\Service
 * @base(/tasks)
 */
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