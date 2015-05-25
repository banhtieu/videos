<?php

namespace Application\Model;
use Core\Database\Model;

class Task extends Model {

    /**
     * @var int id - the unique id of this object
     * @column(identity)
     */
    public $id;

    /**
     * @var string the name
     * @column(string)
     */
    public $name;

    /**
     * @var string the description
     * @column(string)
     */
    public $description;

}