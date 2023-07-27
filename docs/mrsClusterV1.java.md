# `opentelekomcloud_mrs_cluster_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_mrs_cluster_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1).

# `mrsClusterV1` Submodule <a name="`mrsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsClusterV1 <a name="MrsClusterV1" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1;

MrsClusterV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availableZoneId(java.lang.String)
    .billingType(java.lang.Number)
    .clusterName(java.lang.String)
    .clusterVersion(java.lang.String)
    .componentList(IResolvable)
    .componentList(java.util.List<MrsClusterV1ComponentListStruct>)
    .coreNodeNum(java.lang.Number)
    .coreNodeSize(java.lang.String)
    .masterNodeNum(java.lang.Number)
    .masterNodeSize(java.lang.String)
    .nodePublicCertName(java.lang.String)
    .safeMode(java.lang.Number)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .addJobs(IResolvable)
//  .addJobs(java.util.List<MrsClusterV1AddJobs>)
//  .bootstrapScripts(IResolvable)
//  .bootstrapScripts(java.util.List<MrsClusterV1BootstrapScripts>)
//  .clusterAdminSecret(java.lang.String)
//  .clusterType(java.lang.Number)
//  .coreDataVolumeCount(java.lang.Number)
//  .coreDataVolumeSize(java.lang.Number)
//  .coreDataVolumeType(java.lang.String)
//  .id(java.lang.String)
//  .logCollection(java.lang.Number)
//  .masterDataVolumeCount(java.lang.Number)
//  .masterDataVolumeSize(java.lang.Number)
//  .masterDataVolumeType(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MrsClusterV1Timeouts)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.availableZoneId">availableZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.billingType">billingType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.componentList">componentList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>></code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeNum">coreNodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeSize">coreNodeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeNum">masterNodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeSize">masterNodeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.nodePublicCertName">nodePublicCertName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.safeMode">safeMode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.addJobs">addJobs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>></code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.bootstrapScripts">bootstrapScripts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>></code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterAdminSecret">clusterAdminSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeCount">coreDataVolumeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeSize">coreDataVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeType">coreDataVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.logCollection">logCollection</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeCount">masterDataVolumeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeSize">masterDataVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeType">masterDataVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableZoneId`<sup>Required</sup> <a name="availableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.availableZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.billingType"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `componentList`<sup>Required</sup> <a name="componentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.componentList"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>>

component_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `coreNodeNum`<sup>Required</sup> <a name="coreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `coreNodeSize`<sup>Required</sup> <a name="coreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreNodeSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `masterNodeNum`<sup>Required</sup> <a name="masterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `masterNodeSize`<sup>Required</sup> <a name="masterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterNodeSize"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `nodePublicCertName`<sup>Required</sup> <a name="nodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.nodePublicCertName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `safeMode`<sup>Required</sup> <a name="safeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.safeMode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `addJobs`<sup>Optional</sup> <a name="addJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.addJobs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>>

add_jobs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `bootstrapScripts`<sup>Optional</sup> <a name="bootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.bootstrapScripts"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>>

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `clusterAdminSecret`<sup>Optional</sup> <a name="clusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterAdminSecret"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `coreDataVolumeCount`<sup>Optional</sup> <a name="coreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `coreDataVolumeSize`<sup>Optional</sup> <a name="coreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `coreDataVolumeType`<sup>Optional</sup> <a name="coreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.coreDataVolumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logCollection`<sup>Optional</sup> <a name="logCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.logCollection"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `masterDataVolumeCount`<sup>Optional</sup> <a name="masterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `masterDataVolumeSize`<sup>Optional</sup> <a name="masterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `masterDataVolumeType`<sup>Optional</sup> <a name="masterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.masterDataVolumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.volumeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs">putAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts">putBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList">putComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs">resetAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts">resetBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret">resetClusterAdminSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount">resetCoreDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize">resetCoreDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType">resetCoreDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection">resetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount">resetMasterDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize">resetMasterDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType">resetMasterDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAddJobs` <a name="putAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs"></a>

```java
public void putAddJobs(IResolvable OR java.util.List<MrsClusterV1AddJobs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>>

---

##### `putBootstrapScripts` <a name="putBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts"></a>

```java
public void putBootstrapScripts(IResolvable OR java.util.List<MrsClusterV1BootstrapScripts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>>

---

##### `putComponentList` <a name="putComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList"></a>

```java
public void putComponentList(IResolvable OR java.util.List<MrsClusterV1ComponentListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts"></a>

```java
public void putTimeouts(MrsClusterV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `resetAddJobs` <a name="resetAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs"></a>

```java
public void resetAddJobs()
```

##### `resetBootstrapScripts` <a name="resetBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts"></a>

```java
public void resetBootstrapScripts()
```

##### `resetClusterAdminSecret` <a name="resetClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret"></a>

```java
public void resetClusterAdminSecret()
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType"></a>

```java
public void resetClusterType()
```

##### `resetCoreDataVolumeCount` <a name="resetCoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount"></a>

```java
public void resetCoreDataVolumeCount()
```

##### `resetCoreDataVolumeSize` <a name="resetCoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize"></a>

```java
public void resetCoreDataVolumeSize()
```

##### `resetCoreDataVolumeType` <a name="resetCoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType"></a>

```java
public void resetCoreDataVolumeType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId"></a>

```java
public void resetId()
```

##### `resetLogCollection` <a name="resetLogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection"></a>

```java
public void resetLogCollection()
```

##### `resetMasterDataVolumeCount` <a name="resetMasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount"></a>

```java
public void resetMasterDataVolumeCount()
```

##### `resetMasterDataVolumeSize` <a name="resetMasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize"></a>

```java
public void resetMasterDataVolumeSize()
```

##### `resetMasterDataVolumeType` <a name="resetMasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType"></a>

```java
public void resetMasterDataVolumeType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType"></a>

```java
public void resetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1;

MrsClusterV1.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1;

MrsClusterV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1;

MrsClusterV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs">addJobs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName">availableZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts">bootstrapScripts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime">chargingStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState">clusterState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList">componentList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList">MrsClusterV1ComponentListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId">coreNodeProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId">coreNodeSpecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt">createAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo">errorInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp">externalAlternateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp">externalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee">fee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion">hadoopVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp">internalIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp">masterNodeIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId">masterNodeProductId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId">masterNodeSpecId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId">orderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst">privateIpFirst</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark">remark</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId">securityGroupsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId">slaveSecurityGroupsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt">updateAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc">vnc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput">addJobsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput">availableZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput">billingTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput">bootstrapScriptsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput">clusterAdminSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput">componentListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput">coreDataVolumeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput">coreDataVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput">coreDataVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput">coreNodeNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput">coreNodeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput">logCollectionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput">masterDataVolumeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput">masterDataVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput">masterDataVolumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput">masterNodeNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput">masterNodeSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput">nodePublicCertNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput">safeModeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId">availableZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType">billingType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret">clusterAdminSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType">clusterType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount">coreDataVolumeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize">coreDataVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType">coreDataVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum">coreNodeNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize">coreNodeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection">logCollection</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount">masterDataVolumeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize">masterDataVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType">masterDataVolumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum">masterNodeNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize">masterNodeSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName">nodePublicCertName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode">safeMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addJobs`<sup>Required</sup> <a name="addJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs"></a>

```java
public MrsClusterV1AddJobsList getAddJobs();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a>

---

##### `availableZoneName`<sup>Required</sup> <a name="availableZoneName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName"></a>

```java
public java.lang.String getAvailableZoneName();
```

- *Type:* java.lang.String

---

##### `bootstrapScripts`<sup>Required</sup> <a name="bootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts"></a>

```java
public MrsClusterV1BootstrapScriptsList getBootstrapScripts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a>

---

##### `chargingStartTime`<sup>Required</sup> <a name="chargingStartTime" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime"></a>

```java
public java.lang.String getChargingStartTime();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState"></a>

```java
public java.lang.String getClusterState();
```

- *Type:* java.lang.String

---

##### `componentList`<sup>Required</sup> <a name="componentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList"></a>

```java
public MrsClusterV1ComponentListStructList getComponentList();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList">MrsClusterV1ComponentListStructList</a>

---

##### `coreNodeProductId`<sup>Required</sup> <a name="coreNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId"></a>

```java
public java.lang.String getCoreNodeProductId();
```

- *Type:* java.lang.String

---

##### `coreNodeSpecId`<sup>Required</sup> <a name="coreNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId"></a>

```java
public java.lang.String getCoreNodeSpecId();
```

- *Type:* java.lang.String

---

##### `createAt`<sup>Required</sup> <a name="createAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt"></a>

```java
public java.lang.String getCreateAt();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo"></a>

```java
public java.lang.String getErrorInfo();
```

- *Type:* java.lang.String

---

##### `externalAlternateIp`<sup>Required</sup> <a name="externalAlternateIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp"></a>

```java
public java.lang.String getExternalAlternateIp();
```

- *Type:* java.lang.String

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp"></a>

```java
public java.lang.String getExternalIp();
```

- *Type:* java.lang.String

---

##### `fee`<sup>Required</sup> <a name="fee" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee"></a>

```java
public java.lang.String getFee();
```

- *Type:* java.lang.String

---

##### `hadoopVersion`<sup>Required</sup> <a name="hadoopVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion"></a>

```java
public java.lang.String getHadoopVersion();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp"></a>

```java
public java.lang.String getInternalIp();
```

- *Type:* java.lang.String

---

##### `masterNodeIp`<sup>Required</sup> <a name="masterNodeIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp"></a>

```java
public java.lang.String getMasterNodeIp();
```

- *Type:* java.lang.String

---

##### `masterNodeProductId`<sup>Required</sup> <a name="masterNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId"></a>

```java
public java.lang.String getMasterNodeProductId();
```

- *Type:* java.lang.String

---

##### `masterNodeSpecId`<sup>Required</sup> <a name="masterNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId"></a>

```java
public java.lang.String getMasterNodeSpecId();
```

- *Type:* java.lang.String

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId"></a>

```java
public java.lang.String getOrderId();
```

- *Type:* java.lang.String

---

##### `privateIpFirst`<sup>Required</sup> <a name="privateIpFirst" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst"></a>

```java
public java.lang.String getPrivateIpFirst();
```

- *Type:* java.lang.String

---

##### `remark`<sup>Required</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark"></a>

```java
public java.lang.String getRemark();
```

- *Type:* java.lang.String

---

##### `securityGroupsId`<sup>Required</sup> <a name="securityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId"></a>

```java
public java.lang.String getSecurityGroupsId();
```

- *Type:* java.lang.String

---

##### `slaveSecurityGroupsId`<sup>Required</sup> <a name="slaveSecurityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId"></a>

```java
public java.lang.String getSlaveSecurityGroupsId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts"></a>

```java
public MrsClusterV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a>

---

##### `updateAt`<sup>Required</sup> <a name="updateAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt"></a>

```java
public java.lang.String getUpdateAt();
```

- *Type:* java.lang.String

---

##### `vnc`<sup>Required</sup> <a name="vnc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc"></a>

```java
public java.lang.String getVnc();
```

- *Type:* java.lang.String

---

##### `addJobsInput`<sup>Optional</sup> <a name="addJobsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput"></a>

```java
public java.lang.Object getAddJobsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>>

---

##### `availableZoneIdInput`<sup>Optional</sup> <a name="availableZoneIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput"></a>

```java
public java.lang.String getAvailableZoneIdInput();
```

- *Type:* java.lang.String

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput"></a>

```java
public java.lang.Number getBillingTypeInput();
```

- *Type:* java.lang.Number

---

##### `bootstrapScriptsInput`<sup>Optional</sup> <a name="bootstrapScriptsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput"></a>

```java
public java.lang.Object getBootstrapScriptsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>>

---

##### `clusterAdminSecretInput`<sup>Optional</sup> <a name="clusterAdminSecretInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput"></a>

```java
public java.lang.String getClusterAdminSecretInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput"></a>

```java
public java.lang.Number getClusterTypeInput();
```

- *Type:* java.lang.Number

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `componentListInput`<sup>Optional</sup> <a name="componentListInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput"></a>

```java
public java.lang.Object getComponentListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>>

---

##### `coreDataVolumeCountInput`<sup>Optional</sup> <a name="coreDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput"></a>

```java
public java.lang.Number getCoreDataVolumeCountInput();
```

- *Type:* java.lang.Number

---

##### `coreDataVolumeSizeInput`<sup>Optional</sup> <a name="coreDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput"></a>

```java
public java.lang.Number getCoreDataVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `coreDataVolumeTypeInput`<sup>Optional</sup> <a name="coreDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput"></a>

```java
public java.lang.String getCoreDataVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `coreNodeNumInput`<sup>Optional</sup> <a name="coreNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput"></a>

```java
public java.lang.Number getCoreNodeNumInput();
```

- *Type:* java.lang.Number

---

##### `coreNodeSizeInput`<sup>Optional</sup> <a name="coreNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput"></a>

```java
public java.lang.String getCoreNodeSizeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logCollectionInput`<sup>Optional</sup> <a name="logCollectionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput"></a>

```java
public java.lang.Number getLogCollectionInput();
```

- *Type:* java.lang.Number

---

##### `masterDataVolumeCountInput`<sup>Optional</sup> <a name="masterDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput"></a>

```java
public java.lang.Number getMasterDataVolumeCountInput();
```

- *Type:* java.lang.Number

---

##### `masterDataVolumeSizeInput`<sup>Optional</sup> <a name="masterDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput"></a>

```java
public java.lang.Number getMasterDataVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `masterDataVolumeTypeInput`<sup>Optional</sup> <a name="masterDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput"></a>

```java
public java.lang.String getMasterDataVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `masterNodeNumInput`<sup>Optional</sup> <a name="masterNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput"></a>

```java
public java.lang.Number getMasterNodeNumInput();
```

- *Type:* java.lang.Number

---

##### `masterNodeSizeInput`<sup>Optional</sup> <a name="masterNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput"></a>

```java
public java.lang.String getMasterNodeSizeInput();
```

- *Type:* java.lang.String

---

##### `nodePublicCertNameInput`<sup>Optional</sup> <a name="nodePublicCertNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput"></a>

```java
public java.lang.String getNodePublicCertNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `safeModeInput`<sup>Optional</sup> <a name="safeModeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput"></a>

```java
public java.lang.Number getSafeModeInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availableZoneId`<sup>Required</sup> <a name="availableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId"></a>

```java
public java.lang.String getAvailableZoneId();
```

- *Type:* java.lang.String

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType"></a>

```java
public java.lang.Number getBillingType();
```

- *Type:* java.lang.Number

---

##### `clusterAdminSecret`<sup>Required</sup> <a name="clusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret"></a>

```java
public java.lang.String getClusterAdminSecret();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType"></a>

```java
public java.lang.Number getClusterType();
```

- *Type:* java.lang.Number

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `coreDataVolumeCount`<sup>Required</sup> <a name="coreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount"></a>

```java
public java.lang.Number getCoreDataVolumeCount();
```

- *Type:* java.lang.Number

---

##### `coreDataVolumeSize`<sup>Required</sup> <a name="coreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize"></a>

```java
public java.lang.Number getCoreDataVolumeSize();
```

- *Type:* java.lang.Number

---

##### `coreDataVolumeType`<sup>Required</sup> <a name="coreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType"></a>

```java
public java.lang.String getCoreDataVolumeType();
```

- *Type:* java.lang.String

---

##### `coreNodeNum`<sup>Required</sup> <a name="coreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum"></a>

```java
public java.lang.Number getCoreNodeNum();
```

- *Type:* java.lang.Number

---

##### `coreNodeSize`<sup>Required</sup> <a name="coreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize"></a>

```java
public java.lang.String getCoreNodeSize();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logCollection`<sup>Required</sup> <a name="logCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection"></a>

```java
public java.lang.Number getLogCollection();
```

- *Type:* java.lang.Number

---

##### `masterDataVolumeCount`<sup>Required</sup> <a name="masterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount"></a>

```java
public java.lang.Number getMasterDataVolumeCount();
```

- *Type:* java.lang.Number

---

##### `masterDataVolumeSize`<sup>Required</sup> <a name="masterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize"></a>

```java
public java.lang.Number getMasterDataVolumeSize();
```

- *Type:* java.lang.Number

---

##### `masterDataVolumeType`<sup>Required</sup> <a name="masterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType"></a>

```java
public java.lang.String getMasterDataVolumeType();
```

- *Type:* java.lang.String

---

##### `masterNodeNum`<sup>Required</sup> <a name="masterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum"></a>

```java
public java.lang.Number getMasterNodeNum();
```

- *Type:* java.lang.Number

---

##### `masterNodeSize`<sup>Required</sup> <a name="masterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize"></a>

```java
public java.lang.String getMasterNodeSize();
```

- *Type:* java.lang.String

---

##### `nodePublicCertName`<sup>Required</sup> <a name="nodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName"></a>

```java
public java.lang.String getNodePublicCertName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `safeMode`<sup>Required</sup> <a name="safeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode"></a>

```java
public java.lang.Number getSafeMode();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MrsClusterV1AddJobs <a name="MrsClusterV1AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1AddJobs;

MrsClusterV1AddJobs.builder()
    .jarPath(java.lang.String)
    .jobName(java.lang.String)
    .jobType(java.lang.Number)
    .submitJobOnceClusterRun(java.lang.Boolean)
    .submitJobOnceClusterRun(IResolvable)
//  .arguments(java.lang.String)
//  .fileAction(java.lang.String)
//  .hiveScriptPath(java.lang.String)
//  .hql(java.lang.String)
//  .input(java.lang.String)
//  .jobLog(java.lang.String)
//  .output(java.lang.String)
//  .shutdownCluster(java.lang.Boolean)
//  .shutdownCluster(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath">jarPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName">jobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType">jobType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun">submitJobOnceClusterRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments">arguments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction">fileAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath">hiveScriptPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql">hql</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input">input</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog">jobLog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output">output</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster">shutdownCluster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}. |

---

##### `jarPath`<sup>Required</sup> <a name="jarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath"></a>

```java
public java.lang.String getJarPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}.

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType"></a>

```java
public java.lang.Number getJobType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}.

---

##### `submitJobOnceClusterRun`<sup>Required</sup> <a name="submitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun"></a>

```java
public java.lang.Object getSubmitJobOnceClusterRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments"></a>

```java
public java.lang.String getArguments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}.

---

##### `fileAction`<sup>Optional</sup> <a name="fileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction"></a>

```java
public java.lang.String getFileAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}.

---

##### `hiveScriptPath`<sup>Optional</sup> <a name="hiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath"></a>

```java
public java.lang.String getHiveScriptPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}.

---

##### `hql`<sup>Optional</sup> <a name="hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql"></a>

```java
public java.lang.String getHql();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}.

---

##### `jobLog`<sup>Optional</sup> <a name="jobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog"></a>

```java
public java.lang.String getJobLog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output"></a>

```java
public java.lang.String getOutput();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}.

---

##### `shutdownCluster`<sup>Optional</sup> <a name="shutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster"></a>

```java
public java.lang.Object getShutdownCluster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}.

---

### MrsClusterV1BootstrapScripts <a name="MrsClusterV1BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1BootstrapScripts;

MrsClusterV1BootstrapScripts.builder()
    .failAction(java.lang.String)
    .name(java.lang.String)
    .nodes(java.util.List<java.lang.String>)
    .uri(java.lang.String)
//  .activeMaster(java.lang.Boolean)
//  .activeMaster(IResolvable)
//  .beforeComponentStart(java.lang.Boolean)
//  .beforeComponentStart(IResolvable)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction">failAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes">nodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster">activeMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart">beforeComponentStart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}. |

---

##### `failAction`<sup>Required</sup> <a name="failAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction"></a>

```java
public java.lang.String getFailAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}.

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes"></a>

```java
public java.util.List<java.lang.String> getNodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}.

---

##### `activeMaster`<sup>Optional</sup> <a name="activeMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster"></a>

```java
public java.lang.Object getActiveMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}.

---

##### `beforeComponentStart`<sup>Optional</sup> <a name="beforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart"></a>

```java
public java.lang.Object getBeforeComponentStart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}.

---

### MrsClusterV1ComponentListStruct <a name="MrsClusterV1ComponentListStruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1ComponentListStruct;

MrsClusterV1ComponentListStruct.builder()
    .componentName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.property.componentName">componentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.property.componentName"></a>

```java
public java.lang.String getComponentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}.

---

### MrsClusterV1Config <a name="MrsClusterV1Config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1Config;

MrsClusterV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availableZoneId(java.lang.String)
    .billingType(java.lang.Number)
    .clusterName(java.lang.String)
    .clusterVersion(java.lang.String)
    .componentList(IResolvable)
    .componentList(java.util.List<MrsClusterV1ComponentListStruct>)
    .coreNodeNum(java.lang.Number)
    .coreNodeSize(java.lang.String)
    .masterNodeNum(java.lang.Number)
    .masterNodeSize(java.lang.String)
    .nodePublicCertName(java.lang.String)
    .safeMode(java.lang.Number)
    .subnetId(java.lang.String)
    .vpcId(java.lang.String)
//  .addJobs(IResolvable)
//  .addJobs(java.util.List<MrsClusterV1AddJobs>)
//  .bootstrapScripts(IResolvable)
//  .bootstrapScripts(java.util.List<MrsClusterV1BootstrapScripts>)
//  .clusterAdminSecret(java.lang.String)
//  .clusterType(java.lang.Number)
//  .coreDataVolumeCount(java.lang.Number)
//  .coreDataVolumeSize(java.lang.Number)
//  .coreDataVolumeType(java.lang.String)
//  .id(java.lang.String)
//  .logCollection(java.lang.Number)
//  .masterDataVolumeCount(java.lang.Number)
//  .masterDataVolumeSize(java.lang.Number)
//  .masterDataVolumeType(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MrsClusterV1Timeouts)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId">availableZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType">billingType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList">componentList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>></code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum">coreNodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize">coreNodeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum">masterNodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize">masterNodeSize</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName">nodePublicCertName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode">safeMode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs">addJobs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>></code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts">bootstrapScripts</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>></code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret">clusterAdminSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType">clusterType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount">coreDataVolumeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize">coreDataVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType">coreDataVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection">logCollection</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount">masterDataVolumeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize">masterDataVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType">masterDataVolumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableZoneId`<sup>Required</sup> <a name="availableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId"></a>

```java
public java.lang.String getAvailableZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType"></a>

```java
public java.lang.Number getBillingType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `componentList`<sup>Required</sup> <a name="componentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList"></a>

```java
public java.lang.Object getComponentList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>>

component_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `coreNodeNum`<sup>Required</sup> <a name="coreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum"></a>

```java
public java.lang.Number getCoreNodeNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `coreNodeSize`<sup>Required</sup> <a name="coreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize"></a>

```java
public java.lang.String getCoreNodeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `masterNodeNum`<sup>Required</sup> <a name="masterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum"></a>

```java
public java.lang.Number getMasterNodeNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `masterNodeSize`<sup>Required</sup> <a name="masterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize"></a>

```java
public java.lang.String getMasterNodeSize();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `nodePublicCertName`<sup>Required</sup> <a name="nodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName"></a>

```java
public java.lang.String getNodePublicCertName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `safeMode`<sup>Required</sup> <a name="safeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode"></a>

```java
public java.lang.Number getSafeMode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `addJobs`<sup>Optional</sup> <a name="addJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs"></a>

```java
public java.lang.Object getAddJobs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>>

add_jobs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `bootstrapScripts`<sup>Optional</sup> <a name="bootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts"></a>

```java
public java.lang.Object getBootstrapScripts();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>>

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `clusterAdminSecret`<sup>Optional</sup> <a name="clusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret"></a>

```java
public java.lang.String getClusterAdminSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType"></a>

```java
public java.lang.Number getClusterType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `coreDataVolumeCount`<sup>Optional</sup> <a name="coreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount"></a>

```java
public java.lang.Number getCoreDataVolumeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `coreDataVolumeSize`<sup>Optional</sup> <a name="coreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize"></a>

```java
public java.lang.Number getCoreDataVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `coreDataVolumeType`<sup>Optional</sup> <a name="coreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType"></a>

```java
public java.lang.String getCoreDataVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logCollection`<sup>Optional</sup> <a name="logCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection"></a>

```java
public java.lang.Number getLogCollection();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `masterDataVolumeCount`<sup>Optional</sup> <a name="masterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount"></a>

```java
public java.lang.Number getMasterDataVolumeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `masterDataVolumeSize`<sup>Optional</sup> <a name="masterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize"></a>

```java
public java.lang.Number getMasterDataVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `masterDataVolumeType`<sup>Optional</sup> <a name="masterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType"></a>

```java
public java.lang.String getMasterDataVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts"></a>

```java
public MrsClusterV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

### MrsClusterV1Timeouts <a name="MrsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1Timeouts;

MrsClusterV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.4/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsClusterV1AddJobsList <a name="MrsClusterV1AddJobsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1AddJobsList;

new MrsClusterV1AddJobsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get"></a>

```java
public MrsClusterV1AddJobsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>>

---


### MrsClusterV1AddJobsOutputReference <a name="MrsClusterV1AddJobsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1AddJobsOutputReference;

new MrsClusterV1AddJobsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction">resetFileAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath">resetHiveScriptPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql">resetHql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog">resetJobLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster">resetShutdownCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetFileAction` <a name="resetFileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction"></a>

```java
public void resetFileAction()
```

##### `resetHiveScriptPath` <a name="resetHiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath"></a>

```java
public void resetHiveScriptPath()
```

##### `resetHql` <a name="resetHql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql"></a>

```java
public void resetHql()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput"></a>

```java
public void resetInput()
```

##### `resetJobLog` <a name="resetJobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog"></a>

```java
public void resetJobLog()
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput"></a>

```java
public void resetOutput()
```

##### `resetShutdownCluster` <a name="resetShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster"></a>

```java
public void resetShutdownCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput">fileActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput">hiveScriptPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput">hqlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput">jarPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput">jobLogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput">jobTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput">outputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput">shutdownClusterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput">submitJobOnceClusterRunInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments">arguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction">fileAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath">hiveScriptPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql">hql</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath">jarPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog">jobLog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName">jobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType">jobType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output">output</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster">shutdownCluster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun">submitJobOnceClusterRun</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput"></a>

```java
public java.lang.String getArgumentsInput();
```

- *Type:* java.lang.String

---

##### `fileActionInput`<sup>Optional</sup> <a name="fileActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput"></a>

```java
public java.lang.String getFileActionInput();
```

- *Type:* java.lang.String

---

##### `hiveScriptPathInput`<sup>Optional</sup> <a name="hiveScriptPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput"></a>

```java
public java.lang.String getHiveScriptPathInput();
```

- *Type:* java.lang.String

---

##### `hqlInput`<sup>Optional</sup> <a name="hqlInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput"></a>

```java
public java.lang.String getHqlInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `jarPathInput`<sup>Optional</sup> <a name="jarPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput"></a>

```java
public java.lang.String getJarPathInput();
```

- *Type:* java.lang.String

---

##### `jobLogInput`<sup>Optional</sup> <a name="jobLogInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput"></a>

```java
public java.lang.String getJobLogInput();
```

- *Type:* java.lang.String

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput"></a>

```java
public java.lang.String getJobNameInput();
```

- *Type:* java.lang.String

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput"></a>

```java
public java.lang.Number getJobTypeInput();
```

- *Type:* java.lang.Number

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput"></a>

```java
public java.lang.String getOutputInput();
```

- *Type:* java.lang.String

---

##### `shutdownClusterInput`<sup>Optional</sup> <a name="shutdownClusterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput"></a>

```java
public java.lang.Object getShutdownClusterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `submitJobOnceClusterRunInput`<sup>Optional</sup> <a name="submitJobOnceClusterRunInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput"></a>

```java
public java.lang.Object getSubmitJobOnceClusterRunInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments"></a>

```java
public java.lang.String getArguments();
```

- *Type:* java.lang.String

---

##### `fileAction`<sup>Required</sup> <a name="fileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction"></a>

```java
public java.lang.String getFileAction();
```

- *Type:* java.lang.String

---

##### `hiveScriptPath`<sup>Required</sup> <a name="hiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath"></a>

```java
public java.lang.String getHiveScriptPath();
```

- *Type:* java.lang.String

---

##### `hql`<sup>Required</sup> <a name="hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql"></a>

```java
public java.lang.String getHql();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `jarPath`<sup>Required</sup> <a name="jarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath"></a>

```java
public java.lang.String getJarPath();
```

- *Type:* java.lang.String

---

##### `jobLog`<sup>Required</sup> <a name="jobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog"></a>

```java
public java.lang.String getJobLog();
```

- *Type:* java.lang.String

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName"></a>

```java
public java.lang.String getJobName();
```

- *Type:* java.lang.String

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType"></a>

```java
public java.lang.Number getJobType();
```

- *Type:* java.lang.Number

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output"></a>

```java
public java.lang.String getOutput();
```

- *Type:* java.lang.String

---

##### `shutdownCluster`<sup>Required</sup> <a name="shutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster"></a>

```java
public java.lang.Object getShutdownCluster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `submitJobOnceClusterRun`<sup>Required</sup> <a name="submitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun"></a>

```java
public java.lang.Object getSubmitJobOnceClusterRun();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>

---


### MrsClusterV1BootstrapScriptsList <a name="MrsClusterV1BootstrapScriptsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1BootstrapScriptsList;

new MrsClusterV1BootstrapScriptsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get"></a>

```java
public MrsClusterV1BootstrapScriptsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>>

---


### MrsClusterV1BootstrapScriptsOutputReference <a name="MrsClusterV1BootstrapScriptsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1BootstrapScriptsOutputReference;

new MrsClusterV1BootstrapScriptsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster">resetActiveMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart">resetBeforeComponentStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveMaster` <a name="resetActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster"></a>

```java
public void resetActiveMaster()
```

##### `resetBeforeComponentStart` <a name="resetBeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart"></a>

```java
public void resetBeforeComponentStart()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput">activeMasterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput">beforeComponentStartInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput">failActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput">nodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster">activeMaster</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart">beforeComponentStart</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction">failAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes">nodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeMasterInput`<sup>Optional</sup> <a name="activeMasterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput"></a>

```java
public java.lang.Object getActiveMasterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `beforeComponentStartInput`<sup>Optional</sup> <a name="beforeComponentStartInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput"></a>

```java
public java.lang.Object getBeforeComponentStartInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failActionInput`<sup>Optional</sup> <a name="failActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput"></a>

```java
public java.lang.String getFailActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodesInput`<sup>Optional</sup> <a name="nodesInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput"></a>

```java
public java.util.List<java.lang.String> getNodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `activeMaster`<sup>Required</sup> <a name="activeMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster"></a>

```java
public java.lang.Object getActiveMaster();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `beforeComponentStart`<sup>Required</sup> <a name="beforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart"></a>

```java
public java.lang.Object getBeforeComponentStart();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failAction`<sup>Required</sup> <a name="failAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction"></a>

```java
public java.lang.String getFailAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes"></a>

```java
public java.util.List<java.lang.String> getNodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>

---


### MrsClusterV1ComponentListStructList <a name="MrsClusterV1ComponentListStructList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1ComponentListStructList;

new MrsClusterV1ComponentListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get"></a>

```java
public MrsClusterV1ComponentListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>>

---


### MrsClusterV1ComponentListStructOutputReference <a name="MrsClusterV1ComponentListStructOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1ComponentListStructOutputReference;

new MrsClusterV1ComponentListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentDesc">componentDesc</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentId">componentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentVersion">componentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentNameInput">componentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentName">componentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentDesc`<sup>Required</sup> <a name="componentDesc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentDesc"></a>

```java
public java.lang.String getComponentDesc();
```

- *Type:* java.lang.String

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentId"></a>

```java
public java.lang.String getComponentId();
```

- *Type:* java.lang.String

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentVersion"></a>

```java
public java.lang.String getComponentVersion();
```

- *Type:* java.lang.String

---

##### `componentNameInput`<sup>Optional</sup> <a name="componentNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentNameInput"></a>

```java
public java.lang.String getComponentNameInput();
```

- *Type:* java.lang.String

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentName"></a>

```java
public java.lang.String getComponentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>

---


### MrsClusterV1TimeoutsOutputReference <a name="MrsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.mrs_cluster_v1.MrsClusterV1TimeoutsOutputReference;

new MrsClusterV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---



