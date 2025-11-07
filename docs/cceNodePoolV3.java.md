# `cceNodePoolV3` Submodule <a name="`cceNodePoolV3` Submodule" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CceNodePoolV3 <a name="CceNodePoolV3" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3 opentelekomcloud_cce_node_pool_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3;

CceNodePoolV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .dataVolumes(IResolvable|java.util.List<CceNodePoolV3DataVolumes>)
    .flavor(java.lang.String)
    .initialNodeCount(java.lang.Number)
    .name(java.lang.String)
    .rootVolume(CceNodePoolV3RootVolume)
//  .agencyName(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .dockerBaseSize(java.lang.Number)
//  .dockerLvmConfigOverride(java.lang.String)
//  .id(java.lang.String)
//  .k8STags(java.util.Map<java.lang.String, java.lang.String>)
//  .keyPair(java.lang.String)
//  .maxNodeCount(java.lang.Number)
//  .maxPods(java.lang.Number)
//  .minNodeCount(java.lang.Number)
//  .os(java.lang.String)
//  .password(java.lang.String)
//  .postinstall(java.lang.String)
//  .preinstall(java.lang.String)
//  .priority(java.lang.Number)
//  .runtime(java.lang.String)
//  .scaleDownCooldownTime(java.lang.Number)
//  .scaleEnable(java.lang.Boolean|IResolvable)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .serverGroupReference(java.lang.String)
//  .storage(java.lang.String)
//  .subnetId(java.lang.String)
//  .taints(IResolvable|java.util.List<CceNodePoolV3Taints>)
//  .timeouts(CceNodePoolV3Timeouts)
//  .userTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dataVolumes">dataVolumes</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>></code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.initialNodeCount">initialNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.agencyName">agencyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerBaseSize">dockerBaseSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.k8STags">k8STags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.os">os</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.postinstall">postinstall</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.preinstall">preinstall</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleDownCooldownTime">scaleDownCooldownTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleEnable">scaleEnable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#security_group_ids CceNodePoolV3#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.serverGroupReference">serverGroupReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.storage">storage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#storage CceNodePoolV3#storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.userTags">userTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}.

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dataVolumes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>>

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#data_volumes CceNodePoolV3#data_volumes}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.flavor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}.

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.initialNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}.

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.rootVolume"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#root_volume CceNodePoolV3#root_volume}

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.agencyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}.

---

##### `dockerBaseSize`<sup>Optional</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerBaseSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}.

---

##### `dockerLvmConfigOverride`<sup>Optional</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.dockerLvmConfigOverride"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8STags`<sup>Optional</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.k8STags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.keyPair"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}.

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.maxPods"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}.

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.minNodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.os"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.postinstall"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.preinstall"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.runtime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}.

---

##### `scaleDownCooldownTime`<sup>Optional</sup> <a name="scaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleDownCooldownTime"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}.

---

##### `scaleEnable`<sup>Optional</sup> <a name="scaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.scaleEnable"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#security_group_ids CceNodePoolV3#security_group_ids}.

---

##### `serverGroupReference`<sup>Optional</sup> <a name="serverGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.serverGroupReference"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.storage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#storage CceNodePoolV3#storage}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.taints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#taints CceNodePoolV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#timeouts CceNodePoolV3#timeouts}

---

##### `userTags`<sup>Optional</sup> <a name="userTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.Initializer.parameter.userTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes">putDataVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume">putRootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAgencyName">resetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize">resetDockerBaseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride">resetDockerLvmConfigOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags">resetK8STags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount">resetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount">resetMinNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall">resetPostinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall">resetPreinstall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime">resetScaleDownCooldownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable">resetScaleEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference">resetServerGroupReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags">resetUserTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataVolumes` <a name="putDataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes"></a>

```java
public void putDataVolumes(IResolvable|java.util.List<CceNodePoolV3DataVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putDataVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>>

---

##### `putRootVolume` <a name="putRootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume"></a>

```java
public void putRootVolume(CceNodePoolV3RootVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putRootVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `putTaints` <a name="putTaints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints"></a>

```java
public void putTaints(IResolvable|java.util.List<CceNodePoolV3Taints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts"></a>

```java
public void putTimeouts(CceNodePoolV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---

##### `resetAgencyName` <a name="resetAgencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAgencyName"></a>

```java
public void resetAgencyName()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetDockerBaseSize` <a name="resetDockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerBaseSize"></a>

```java
public void resetDockerBaseSize()
```

##### `resetDockerLvmConfigOverride` <a name="resetDockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetDockerLvmConfigOverride"></a>

```java
public void resetDockerLvmConfigOverride()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetId"></a>

```java
public void resetId()
```

##### `resetK8STags` <a name="resetK8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetK8STags"></a>

```java
public void resetK8STags()
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetKeyPair"></a>

```java
public void resetKeyPair()
```

##### `resetMaxNodeCount` <a name="resetMaxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxNodeCount"></a>

```java
public void resetMaxNodeCount()
```

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMaxPods"></a>

```java
public void resetMaxPods()
```

##### `resetMinNodeCount` <a name="resetMinNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetMinNodeCount"></a>

```java
public void resetMinNodeCount()
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetOs"></a>

```java
public void resetOs()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPostinstall` <a name="resetPostinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPostinstall"></a>

```java
public void resetPostinstall()
```

##### `resetPreinstall` <a name="resetPreinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPreinstall"></a>

```java
public void resetPreinstall()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetScaleDownCooldownTime` <a name="resetScaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleDownCooldownTime"></a>

```java
public void resetScaleDownCooldownTime()
```

##### `resetScaleEnable` <a name="resetScaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetScaleEnable"></a>

```java
public void resetScaleEnable()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetServerGroupReference` <a name="resetServerGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetServerGroupReference"></a>

```java
public void resetServerGroupReference()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTaints` <a name="resetTaints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTaints"></a>

```java
public void resetTaints()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserTags` <a name="resetUserTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.resetUserTags"></a>

```java
public void resetUserTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CceNodePoolV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3;

CceNodePoolV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3;

CceNodePoolV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3;

CceNodePoolV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3;

CceNodePoolV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CceNodePoolV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CceNodePoolV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CceNodePoolV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CceNodePoolV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CceNodePoolV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes">dataVolumes</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints">taints</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyNameInput">agencyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput">dataVolumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput">dockerBaseSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput">dockerLvmConfigOverrideInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput">flavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput">initialNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput">k8STagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput">keyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput">maxPodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput">minNodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput">osInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput">postinstallInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput">preinstallInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput">rootVolumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput">scaleDownCooldownTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput">scaleEnableInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput">serverGroupReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storageInput">storageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput">userTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize">dockerBaseSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount">initialNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags">k8STags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os">os</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall">postinstall</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall">preinstall</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime">scaleDownCooldownTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable">scaleEnable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference">serverGroupReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storage">storage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags">userTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumes"></a>

```java
public CceNodePoolV3DataVolumesList getDataVolumes();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList">CceNodePoolV3DataVolumesList</a>

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolume"></a>

```java
public CceNodePoolV3RootVolumeOutputReference getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference">CceNodePoolV3RootVolumeOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taints"></a>

```java
public CceNodePoolV3TaintsList getTaints();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList">CceNodePoolV3TaintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeouts"></a>

```java
public CceNodePoolV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference">CceNodePoolV3TimeoutsOutputReference</a>

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyNameInput"></a>

```java
public java.lang.String getAgencyNameInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `dataVolumesInput`<sup>Optional</sup> <a name="dataVolumesInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dataVolumesInput"></a>

```java
public IResolvable|java.util.List<CceNodePoolV3DataVolumes> getDataVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>>

---

##### `dockerBaseSizeInput`<sup>Optional</sup> <a name="dockerBaseSizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSizeInput"></a>

```java
public java.lang.Number getDockerBaseSizeInput();
```

- *Type:* java.lang.Number

---

##### `dockerLvmConfigOverrideInput`<sup>Optional</sup> <a name="dockerLvmConfigOverrideInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverrideInput"></a>

```java
public java.lang.String getDockerLvmConfigOverrideInput();
```

- *Type:* java.lang.String

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavorInput"></a>

```java
public java.lang.String getFlavorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialNodeCountInput`<sup>Optional</sup> <a name="initialNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCountInput"></a>

```java
public java.lang.Number getInitialNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `k8STagsInput`<sup>Optional</sup> <a name="k8STagsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getK8STagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPairInput"></a>

```java
public java.lang.String getKeyPairInput();
```

- *Type:* java.lang.String

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCountInput"></a>

```java
public java.lang.Number getMaxNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPodsInput"></a>

```java
public java.lang.Number getMaxPodsInput();
```

- *Type:* java.lang.Number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCountInput"></a>

```java
public java.lang.Number getMinNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.osInput"></a>

```java
public java.lang.String getOsInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `postinstallInput`<sup>Optional</sup> <a name="postinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstallInput"></a>

```java
public java.lang.String getPostinstallInput();
```

- *Type:* java.lang.String

---

##### `preinstallInput`<sup>Optional</sup> <a name="preinstallInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstallInput"></a>

```java
public java.lang.String getPreinstallInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `rootVolumeInput`<sup>Optional</sup> <a name="rootVolumeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.rootVolumeInput"></a>

```java
public CceNodePoolV3RootVolume getRootVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `scaleDownCooldownTimeInput`<sup>Optional</sup> <a name="scaleDownCooldownTimeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTimeInput"></a>

```java
public java.lang.Number getScaleDownCooldownTimeInput();
```

- *Type:* java.lang.Number

---

##### `scaleEnableInput`<sup>Optional</sup> <a name="scaleEnableInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnableInput"></a>

```java
public java.lang.Boolean|IResolvable getScaleEnableInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverGroupReferenceInput`<sup>Optional</sup> <a name="serverGroupReferenceInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReferenceInput"></a>

```java
public java.lang.String getServerGroupReferenceInput();
```

- *Type:* java.lang.String

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storageInput"></a>

```java
public java.lang.String getStorageInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.taintsInput"></a>

```java
public IResolvable|java.util.List<CceNodePoolV3Taints> getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.timeoutsInput"></a>

```java
public IResolvable|CceNodePoolV3Timeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---

##### `userTagsInput`<sup>Optional</sup> <a name="userTagsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `dockerBaseSize`<sup>Required</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerBaseSize"></a>

```java
public java.lang.Number getDockerBaseSize();
```

- *Type:* java.lang.Number

---

##### `dockerLvmConfigOverride`<sup>Required</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.dockerLvmConfigOverride"></a>

```java
public java.lang.String getDockerLvmConfigOverride();
```

- *Type:* java.lang.String

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.initialNodeCount"></a>

```java
public java.lang.Number getInitialNodeCount();
```

- *Type:* java.lang.Number

---

##### `k8STags`<sup>Required</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.k8STags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getK8STags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `postinstall`<sup>Required</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.postinstall"></a>

```java
public java.lang.String getPostinstall();
```

- *Type:* java.lang.String

---

##### `preinstall`<sup>Required</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.preinstall"></a>

```java
public java.lang.String getPreinstall();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `scaleDownCooldownTime`<sup>Required</sup> <a name="scaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleDownCooldownTime"></a>

```java
public java.lang.Number getScaleDownCooldownTime();
```

- *Type:* java.lang.Number

---

##### `scaleEnable`<sup>Required</sup> <a name="scaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.scaleEnable"></a>

```java
public java.lang.Boolean|IResolvable getScaleEnable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverGroupReference`<sup>Required</sup> <a name="serverGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.serverGroupReference"></a>

```java
public java.lang.String getServerGroupReference();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `userTags`<sup>Required</sup> <a name="userTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.userTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CceNodePoolV3Config <a name="CceNodePoolV3Config" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3Config;

CceNodePoolV3Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .dataVolumes(IResolvable|java.util.List<CceNodePoolV3DataVolumes>)
    .flavor(java.lang.String)
    .initialNodeCount(java.lang.Number)
    .name(java.lang.String)
    .rootVolume(CceNodePoolV3RootVolume)
//  .agencyName(java.lang.String)
//  .availabilityZone(java.lang.String)
//  .dockerBaseSize(java.lang.Number)
//  .dockerLvmConfigOverride(java.lang.String)
//  .id(java.lang.String)
//  .k8STags(java.util.Map<java.lang.String, java.lang.String>)
//  .keyPair(java.lang.String)
//  .maxNodeCount(java.lang.Number)
//  .maxPods(java.lang.Number)
//  .minNodeCount(java.lang.Number)
//  .os(java.lang.String)
//  .password(java.lang.String)
//  .postinstall(java.lang.String)
//  .preinstall(java.lang.String)
//  .priority(java.lang.Number)
//  .runtime(java.lang.String)
//  .scaleDownCooldownTime(java.lang.Number)
//  .scaleEnable(java.lang.Boolean|IResolvable)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .serverGroupReference(java.lang.String)
//  .storage(java.lang.String)
//  .subnetId(java.lang.String)
//  .taints(IResolvable|java.util.List<CceNodePoolV3Taints>)
//  .timeouts(CceNodePoolV3Timeouts)
//  .userTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes">dataVolumes</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>></code> | data_volumes block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount">initialNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume">rootVolume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | root_volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize">dockerBaseSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride">dockerLvmConfigOverride</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags">k8STags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount">maxNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount">minNodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os">os</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall">postinstall</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall">preinstall</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.runtime">runtime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime">scaleDownCooldownTime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable">scaleEnable</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#security_group_ids CceNodePoolV3#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference">serverGroupReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.storage">storage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#storage CceNodePoolV3#storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>></code> | taints block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags">userTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#cluster_id CceNodePoolV3#cluster_id}.

---

##### `dataVolumes`<sup>Required</sup> <a name="dataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dataVolumes"></a>

```java
public IResolvable|java.util.List<CceNodePoolV3DataVolumes> getDataVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>>

data_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#data_volumes CceNodePoolV3#data_volumes}

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#flavor CceNodePoolV3#flavor}.

---

##### `initialNodeCount`<sup>Required</sup> <a name="initialNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.initialNodeCount"></a>

```java
public java.lang.Number getInitialNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#initial_node_count CceNodePoolV3#initial_node_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#name CceNodePoolV3#name}.

---

##### `rootVolume`<sup>Required</sup> <a name="rootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.rootVolume"></a>

```java
public CceNodePoolV3RootVolume getRootVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

root_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#root_volume CceNodePoolV3#root_volume}

---

##### `agencyName`<sup>Optional</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#agency_name CceNodePoolV3#agency_name}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#availability_zone CceNodePoolV3#availability_zone}.

---

##### `dockerBaseSize`<sup>Optional</sup> <a name="dockerBaseSize" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerBaseSize"></a>

```java
public java.lang.Number getDockerBaseSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_base_size CceNodePoolV3#docker_base_size}.

---

##### `dockerLvmConfigOverride`<sup>Optional</sup> <a name="dockerLvmConfigOverride" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.dockerLvmConfigOverride"></a>

```java
public java.lang.String getDockerLvmConfigOverride();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#docker_lvm_config_override CceNodePoolV3#docker_lvm_config_override}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#id CceNodePoolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `k8STags`<sup>Optional</sup> <a name="k8STags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.k8STags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getK8STags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#k8s_tags CceNodePoolV3#k8s_tags}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#key_pair CceNodePoolV3#key_pair}.

---

##### `maxNodeCount`<sup>Optional</sup> <a name="maxNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxNodeCount"></a>

```java
public java.lang.Number getMaxNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_node_count CceNodePoolV3#max_node_count}.

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#max_pods CceNodePoolV3#max_pods}.

---

##### `minNodeCount`<sup>Optional</sup> <a name="minNodeCount" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.minNodeCount"></a>

```java
public java.lang.Number getMinNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#min_node_count CceNodePoolV3#min_node_count}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#os CceNodePoolV3#os}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#password CceNodePoolV3#password}.

---

##### `postinstall`<sup>Optional</sup> <a name="postinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.postinstall"></a>

```java
public java.lang.String getPostinstall();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#postinstall CceNodePoolV3#postinstall}.

---

##### `preinstall`<sup>Optional</sup> <a name="preinstall" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.preinstall"></a>

```java
public java.lang.String getPreinstall();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#preinstall CceNodePoolV3#preinstall}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#priority CceNodePoolV3#priority}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#runtime CceNodePoolV3#runtime}.

---

##### `scaleDownCooldownTime`<sup>Optional</sup> <a name="scaleDownCooldownTime" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleDownCooldownTime"></a>

```java
public java.lang.Number getScaleDownCooldownTime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_down_cooldown_time CceNodePoolV3#scale_down_cooldown_time}.

---

##### `scaleEnable`<sup>Optional</sup> <a name="scaleEnable" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.scaleEnable"></a>

```java
public java.lang.Boolean|IResolvable getScaleEnable();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#scale_enable CceNodePoolV3#scale_enable}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#security_group_ids CceNodePoolV3#security_group_ids}.

---

##### `serverGroupReference`<sup>Optional</sup> <a name="serverGroupReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.serverGroupReference"></a>

```java
public java.lang.String getServerGroupReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#server_group_reference CceNodePoolV3#server_group_reference}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.storage"></a>

```java
public java.lang.String getStorage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#storage CceNodePoolV3#storage}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#subnet_id CceNodePoolV3#subnet_id}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.taints"></a>

```java
public IResolvable|java.util.List<CceNodePoolV3Taints> getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#taints CceNodePoolV3#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.timeouts"></a>

```java
public CceNodePoolV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#timeouts CceNodePoolV3#timeouts}

---

##### `userTags`<sup>Optional</sup> <a name="userTags" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Config.property.userTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#user_tags CceNodePoolV3#user_tags}.

---

### CceNodePoolV3DataVolumes <a name="CceNodePoolV3DataVolumes" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3DataVolumes;

CceNodePoolV3DataVolumes.builder()
    .size(java.lang.Number)
    .volumetype(java.lang.String)
//  .extendParam(java.lang.String)
//  .extendParams(java.util.Map<java.lang.String, java.lang.String>)
//  .kmsId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype">volumetype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam">extendParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams">extendParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.volumetype"></a>

```java
public java.lang.String getVolumetype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParam"></a>

```java
public java.lang.String getExtendParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `extendParams`<sup>Optional</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.extendParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3RootVolume <a name="CceNodePoolV3RootVolume" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3RootVolume;

CceNodePoolV3RootVolume.builder()
    .size(java.lang.Number)
    .volumetype(java.lang.String)
//  .extendParam(java.lang.String)
//  .extendParams(java.util.Map<java.lang.String, java.lang.String>)
//  .kmsId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype">volumetype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam">extendParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams">extendParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#size CceNodePoolV3#size}.

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.volumetype"></a>

```java
public java.lang.String getVolumetype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#volumetype CceNodePoolV3#volumetype}.

---

##### `extendParam`<sup>Optional</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParam"></a>

```java
public java.lang.String getExtendParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_param CceNodePoolV3#extend_param}.

---

##### `extendParams`<sup>Optional</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.extendParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#extend_params CceNodePoolV3#extend_params}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#kms_id CceNodePoolV3#kms_id}.

---

### CceNodePoolV3Taints <a name="CceNodePoolV3Taints" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3Taints;

CceNodePoolV3Taints.builder()
    .effect(java.lang.String)
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#effect CceNodePoolV3#effect}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#key CceNodePoolV3#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#value CceNodePoolV3#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#effect CceNodePoolV3#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#key CceNodePoolV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#value CceNodePoolV3#value}.

---

### CceNodePoolV3Timeouts <a name="CceNodePoolV3Timeouts" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3Timeouts;

CceNodePoolV3Timeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#create CceNodePoolV3#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#default CceNodePoolV3#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#delete CceNodePoolV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cce_node_pool_v3#update CceNodePoolV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CceNodePoolV3DataVolumesList <a name="CceNodePoolV3DataVolumesList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3DataVolumesList;

new CceNodePoolV3DataVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get"></a>

```java
public CceNodePoolV3DataVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CceNodePoolV3DataVolumes> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>>

---


### CceNodePoolV3DataVolumesOutputReference <a name="CceNodePoolV3DataVolumesOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3DataVolumesOutputReference;

new CceNodePoolV3DataVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams">resetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParam"></a>

```java
public void resetExtendParam()
```

##### `resetExtendParams` <a name="resetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetExtendParams"></a>

```java
public void resetExtendParams()
```

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.resetKmsId"></a>

```java
public void resetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput">extendParamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput">extendParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput">volumetypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam">extendParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams">extendParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype">volumetype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamInput"></a>

```java
public java.lang.String getExtendParamInput();
```

- *Type:* java.lang.String

---

##### `extendParamsInput`<sup>Optional</sup> <a name="extendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsIdInput"></a>

```java
public java.lang.String getKmsIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumetypeInput`<sup>Optional</sup> <a name="volumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetypeInput"></a>

```java
public java.lang.String getVolumetypeInput();
```

- *Type:* java.lang.String

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParam"></a>

```java
public java.lang.String getExtendParam();
```

- *Type:* java.lang.String

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.extendParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.volumetype"></a>

```java
public java.lang.String getVolumetype();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumesOutputReference.property.internalValue"></a>

```java
public IResolvable|CceNodePoolV3DataVolumes getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3DataVolumes">CceNodePoolV3DataVolumes</a>

---


### CceNodePoolV3RootVolumeOutputReference <a name="CceNodePoolV3RootVolumeOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3RootVolumeOutputReference;

new CceNodePoolV3RootVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam">resetExtendParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams">resetExtendParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtendParam` <a name="resetExtendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParam"></a>

```java
public void resetExtendParam()
```

##### `resetExtendParams` <a name="resetExtendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetExtendParams"></a>

```java
public void resetExtendParams()
```

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.resetKmsId"></a>

```java
public void resetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput">extendParamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput">extendParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput">volumetypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam">extendParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams">extendParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype">volumetype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extendParamInput`<sup>Optional</sup> <a name="extendParamInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamInput"></a>

```java
public java.lang.String getExtendParamInput();
```

- *Type:* java.lang.String

---

##### `extendParamsInput`<sup>Optional</sup> <a name="extendParamsInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsIdInput"></a>

```java
public java.lang.String getKmsIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumetypeInput`<sup>Optional</sup> <a name="volumetypeInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetypeInput"></a>

```java
public java.lang.String getVolumetypeInput();
```

- *Type:* java.lang.String

---

##### `extendParam`<sup>Required</sup> <a name="extendParam" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParam"></a>

```java
public java.lang.String getExtendParam();
```

- *Type:* java.lang.String

---

##### `extendParams`<sup>Required</sup> <a name="extendParams" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.extendParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtendParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `volumetype`<sup>Required</sup> <a name="volumetype" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.volumetype"></a>

```java
public java.lang.String getVolumetype();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolumeOutputReference.property.internalValue"></a>

```java
public CceNodePoolV3RootVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3RootVolume">CceNodePoolV3RootVolume</a>

---


### CceNodePoolV3TaintsList <a name="CceNodePoolV3TaintsList" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3TaintsList;

new CceNodePoolV3TaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get"></a>

```java
public CceNodePoolV3TaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CceNodePoolV3Taints> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>>

---


### CceNodePoolV3TaintsOutputReference <a name="CceNodePoolV3TaintsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3TaintsOutputReference;

new CceNodePoolV3TaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TaintsOutputReference.property.internalValue"></a>

```java
public IResolvable|CceNodePoolV3Taints getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Taints">CceNodePoolV3Taints</a>

---


### CceNodePoolV3TimeoutsOutputReference <a name="CceNodePoolV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cce_node_pool_v3.CceNodePoolV3TimeoutsOutputReference;

new CceNodePoolV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CceNodePoolV3Timeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.cceNodePoolV3.CceNodePoolV3Timeouts">CceNodePoolV3Timeouts</a>

---



