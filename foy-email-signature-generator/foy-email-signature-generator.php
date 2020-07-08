<?php
/*
Plugin Name: Foy Email Signature Generator
Description: Adds a shortcode [email-signature-generator] to insert the email signature generator
Version:     1.1
Author:      Ron Holt
Author URI:  http://ronholt.info/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function fesg_shortcode( $atts ) {
  $a = shortcode_atts( array(
  ), $atts );

  $plugin_dir = plugin_dir_url( __FILE__ );

  $output = '
  <noscript><strong>We\'re sorry but email-signature doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
  <div id=email-signature-app></div>
  ';
  return $output;
}
add_shortcode( 'email-signature-generator', 'fesg_shortcode' );



function fesg_scripts() {
    wp_enqueue_script( 'fesg_app', plugin_dir_url( __FILE__ ) . 'js/app.cefec1d5.js', '201904091333', true );
    wp_enqueue_script( 'fesg_vendors', plugin_dir_url( __FILE__ ) . 'js/chunk-vendors.29db6514.js', array('fesg_app'), '201904091333', true );
    wp_register_style( 'fesg_styles', plugin_dir_url( __FILE__ ) . 'css/app.b325c62f.css' );
    wp_enqueue_style( 'fesg_styles' );

}
add_action('wp_enqueue_scripts', 'fesg_scripts');

?>
