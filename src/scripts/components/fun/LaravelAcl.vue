<template>
    <article class="article">
        <header class="article__header">
            <h1 class="article__title">ACL in Laravel</h1>
            <p class="article__description">a totally unopinionated method of ACL</p>
        </header>

        <div class="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum debitis quisquam doloribus, consectetur expedita, alias ipsa quia inventore repudiandae possimus veniam nam excepturi est sapiente consequuntur et non cum.</p>
        </div>

        <u-code u-file="laravel-acl/user"></u-code>

        <div class="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum debitis quisquam doloribus, consectetur expedita, alias ipsa quia inventore repudiandae possimus veniam nam excepturi est sapiente consequuntur et non cum.</p>
        </div>

        <u-code u-file="laravel-acl/role"></u-code>

        <div class="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum debitis quisquam doloribus, consectetur expedita, alias ipsa quia inventore repudiandae possimus veniam nam excepturi est sapiente consequuntur et non cum.</p>
        </div>

        <u-code u-file="laravel-acl/permission"></u-code>

        <div class="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum debitis quisquam doloribus, consectetur expedita, alias ipsa quia inventore repudiandae possimus veniam nam excepturi est sapiente consequuntur et non cum.</p>
        </div>

        <u-code u-file="laravel-acl/gate"></u-code>

        <div class="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum debitis quisquam doloribus, consectetur expedita, alias ipsa quia inventore repudiandae possimus veniam nam excepturi est sapiente consequuntur et non cum.</p>
        </div>

        <u-code u-file="laravel-acl/auth-service-provider"></u-code>

        <div class="article__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam earum debitis quisquam doloribus, consectetur expedita, alias ipsa quia inventore repudiandae possimus veniam nam excepturi est sapiente consequuntur et non cum.</p>
        </div>
    </article>
</template>

<script>
    import highlight from 'highlight.js';

    export default {
        data() {
            return {
                code: `namespace App\\Models;

use Illuminate\\Database\\Eloquent\\Model;
use Illuminate\\Database\\Eloquent\\Relation\\BelongsToMany;

class Permission extends Model
{
    /** The attributes that are mass assignable. */
    protected $fillable = ['identifier', 'name', 'description'];

    /**  Get this permission's roles. */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }
}`,
            }
        },

        mounted() {
            this.code = highlight.highlight('php', this.code).value;
        }
    };
</script>
