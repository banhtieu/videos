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
        $collection = Repository::get("Task");
        $query = $collection->buildQuery();

        return $query->findAll();
    }

    /**
     * @param $name string #path
     * @return string
     * @get(/hello/:name)
     */
    public function hello($name){
        return "Hello, $name!";
    }

    /**
     * @get(/add)
     */
    public function  add(){
        $collection = Repository::get("Task");

        $task = new Task();
        $task->id = 0;
        $task->name = "Sample Task";
        $task->description = "Create a sample task";
        $collection->save($task);
    }

}