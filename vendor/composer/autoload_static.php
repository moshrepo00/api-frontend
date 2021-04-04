<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0062425467feb421b256f852514d1692
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0062425467feb421b256f852514d1692::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0062425467feb421b256f852514d1692::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
