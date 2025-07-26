<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u327805599_eZUwO' );

/** Database username */
define( 'DB_USER', 'u327805599_viQLh' );

/** Database password */
define( 'DB_PASSWORD', '07YitRcDhN' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          't37~v].n@K?*%3<0~%cV+&%u[g6Snt&-Uo9M])_wE3eX`HBSor2flBnCJ|nk$#B ' );
define( 'SECURE_AUTH_KEY',   '3ztbvJwzSH;PTA#|]]/k+T?ps)--tS$C+D^3YV,~Y3cX,>yK|i[BvIk$CTJic:RH' );
define( 'LOGGED_IN_KEY',     'B-(4b?4jx6SU(;=tYszj4v>:kKUf@FMvgE3#/R,DN8Hs%SzOm^Gi 0_z-+Q~1(/A' );
define( 'NONCE_KEY',         '}tPUCz=IoEV+WC/rFgMO)5wOt7nvhQ}dd%SUk8)05b`5E}?-2gkM~Ygn18|ry@Vr' );
define( 'AUTH_SALT',         'aI;Wjd]yT&Tc#]Wa1ttAcbd}Vd_;q;Ii-qHT}oe 3:z@X7X~^ N !6C[!iU|myPL' );
define( 'SECURE_AUTH_SALT',  'H1$F-MCWC3]O~DH|PZm@)h)-[LnxJ~<iY.Sx}K,w-xSt@!M_Xq!6)0B(mpO8/X?a' );
define( 'LOGGED_IN_SALT',    'h2-0a_+-}dThw.XP9(#)pjtXf=<QuJ2nQZ_X`OwhF7k_ESbTT6.#*z4Nt*43YE&d' );
define( 'NONCE_SALT',        'PJ0x[vTx,.P2x:8Blh-4*UrBSKCDg1nn@,g???-&J:x(>_]@G3002dNz2;=fHlbB' );
define( 'WP_CACHE_KEY_SALT', 'Cw.$var8/CKU:lMg3Xk.2af;HzEg[s]y`_:Vb7s,NZ%_]{X!sFPm(`ZkxR;4Us?L' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '133d27a91d07b9e0bfda7ec0c680a543' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
