<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-glossary"><input type="submit" class="btn btn-warning" value="Add New Glossary Term"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Glossary ID</th>
            <th>Glossary Image</th>
            <th>Glossary Name</th>
            <th>Glossary Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="glossaries in allAllGlossariesList" :key="glossaries.id">
          <tr>
            <td>{{ glossaries.id }}</td>
            <td>{{ glossaries.image }}</td>
            <td>{{ glossaries.name }}</td>
            <td>{{ glossaries.content }}</td>
            <td><a :href="`/admin/edit/glossary/${glossaries.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  allAllGlossariesList from '~/apollo/queries/content/glossaries.gql'

export default {
  data() {
    return {
      allAllGlossariesList: [],
    }
  },
  apollo: {
    allAllGlossariesList: {
      prefetch: true,
      query: allAllGlossariesList
    }
  },
    head: {
      title: 'Glossary'
    }
  }

</script>
