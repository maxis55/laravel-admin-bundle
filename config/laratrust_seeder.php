<?php

return [
    'role_structure' => [
        'superadmin' => [
            'admins' => 'c,r,u,d',
        ],
        'admin' => [
        ],
        'user' => [
        ],
        'store'=>[
        ]
    ],
    'permission_structure' => [
    ],
    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete'
    ]
];
