<template>
  
  <div>
      <div class="el-btn-wrap">
          <el-button type="danger">新建</el-button>
          <el-button type="info" @click="batchDelete">删除</el-button>
      </div>

      <div>          
          <el-table
            :data="tableData3"
            border
            height="500"

            @select-all="tableSelectAllFn"
            @select = "tableselectFN"
            @selection-change = "tableSelectChange"
            @row-click = "rowClickFn"

            >

            <el-table-column
              fixed
              type="selection"
              width="55">
            </el-table-column>

            <el-table-column
              prop="date"
              label="日期">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编">
            </el-table-column>


            <el-table-column
              fixed="right"
              label="操作"
              width="100">

              <template scope="scope">
                <el-button type="text" @click="deleteRow(scope.$index, tableData3)" size="small">删除</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>

            </el-table-column>

          </el-table>
      </div>
  </div>

</template>


<style>
  
  .el-btn-wrap {
      padding-bottom: 15px;
  }


</style>

<script>
  export default {
    methods: {

      // 删除行
      deleteRow(index, rows) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {

          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'

        }).then(() => {

          console.log(rows.splice(index, 1)[0].date);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });


        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      },

      // 全选(参数为tableData)
      tableSelectAllFn(rows) {
        //for(let i = 0; i < rows.length; i++) {
          //console.log(rows[i].date);
        //}

        //console.log(rows.length);

      },

      // 单选
      tableselectFN(selection, rows) {
        
      },


      // change
      tableSelectChange(selection) {
        this.selected = selection;
        //for(let i = 0; i < selection.length; i++) {
          //console.log(selection[i].date);
        //}
 
      },
      // row-click
      rowClickFn(row, event, column) {
         // console.log('row-click');
      },

      batchDelete() {

          for(let j = 0; j < this.selected.length; j++) {

              var index = -1;
              for (let i = 0; i < this.tableData3.length; i++) {

                  if (this.tableData3[i] == this.selected[j]) {
                      index = i;
                  }
              }
              if (index > -1) {
                this.tableData3.splice(index, 1);
              }

          }

      }

    },
    data() {
      return {
        selected: [],
        tableData3: [{
          date: '2016-05-19',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          id: 0
        }, {
          date: '2016-05-18',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          id: 1
        }, {
          date: '2016-05-17',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          id: 2
        }, {
          date: '2016-05-16',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-15',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-14',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-13',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-12',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-11',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-10',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-09',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-05',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>