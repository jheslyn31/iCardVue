<template>
    <div class="grid grid-cols-12 gap-4 place-items-center">
        <div class="col-span-12 md:col-span-6">
            <div slot="header" class="clearfix">
                    <span>Nuevos Productos</span>
                </div>
                <div>
                    <el-form ref="form" :model="form">
                        <el-form-item class="hidden">
                            <el-input v-model="form.id"></el-input>
                        </el-form-item>
                        <el-form-item label="Nombre">
                            <el-input v-model="form.nombre"></el-input>
                        </el-form-item>
                        <el-form-item label="Precio">
                            <el-input v-model="form.precio"></el-input>
                        </el-form-item>
                        <el-form-item label="Descripcion">
                            <el-input v-model="form.descripcion"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="guardar()" >{{buttonText}}</el-button>
                        <el-button @click="reset()">Cancelar</el-button>   
                    </el-form>
            </div>
        </div>
        <div class="col-span-12 md:col-span-6">
            <div>
                <el-table
                :data="productos"
                empty-text="No hay productos"
                style="width: 100%">
                <el-table-column
                    prop="nombre"
                    label="Nombre del producto"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="precio"
                    label="Precio"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="descripcion"
                    label="Descripcion">
                </el-table-column>
                <el-table-column >
                    <template slot-scope="scope">
                        <el-button size="mini" @click="editar(scope.row.id)" >Editar</el-button>
                        <el-button size="mini" @click="eliminar(scope.row.id )">Eliminar</el-button>   
                    </template>
                
                </el-table-column>
               
            
                </el-table>
            </div>
           
        </div>
       

        
    </div>
</template>
<script>
export default {
    name: 'Formulario',
    data(){
        return {
            buttonText: 'Guardar',
            form: {
                id: '',
                nombre: '',
                precio: '',
                descripcion: ''
            },
            productos: []
        }

    },
    mounted(){
        this.listar()
    },
    methods: {
        listar(){
            this.productos = JSON.parse(localStorage.getItem('productos')) || []
        },

        guardar(){
            if(this.form.id){
                //editando
                this.productos.find(prod => {
                    if(prod.id == this.form.id){
                        prod.nombre= this.form.nombre
                        prod.descripcion = this.form.descripcion
                        prod.precio =this.form.precio
                    }
                })
               
                localStorage.setItem('productos', JSON.stringify(this.productos))
                this.reset()
            }else{
                //guardando
                const id = this.productos.length
                this.form.id = id + 1
                const productosNuevos = this.productos.concat([this.form])
                localStorage.setItem('productos', JSON.stringify(productosNuevos))
                this.reset()
                this.productos = JSON.parse(localStorage.getItem('productos'))
            }
            
        },
        reset(){
            this.form =  {
                nombre: '',
                precio: '',
                descripcion: ''
            }
        },
        eliminar(id){
            
            this.productos.shift(id)
            localStorage.setItem('productos', JSON.stringify(this.productos))
        },
        editar(id){
            this.buttonText= 'Guarda Cambios'
            const productoEditar =  this.productos.find(prod => prod.id == id)
            this.form =  Object.assign({}, productoEditar)
        }

    }
}

</script>
<style>
</style>