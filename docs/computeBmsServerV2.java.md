# `opentelekomcloud_compute_bms_server_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_compute_bms_server_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2).

# `computeBmsServerV2` Submodule <a name="`computeBmsServerV2` Submodule" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBmsServerV2 <a name="ComputeBmsServerV2" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2 opentelekomcloud_compute_bms_server_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2;

ComputeBmsServerV2.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityZone(java.lang.String)
    .name(java.lang.String)
//  .adminPass(java.lang.String)
//  .blockDevice(IResolvable)
//  .blockDevice(java.util.List<ComputeBmsServerV2BlockDevice>)
//  .flavorId(java.lang.String)
//  .flavorName(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .imageName(java.lang.String)
//  .keyPair(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(IResolvable)
//  .network(java.util.List<ComputeBmsServerV2Network>)
//  .region(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .stopBeforeDestroy(java.lang.Boolean)
//  .stopBeforeDestroy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ComputeBmsServerV2Timeouts)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.adminPass">adminPass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.blockDevice">blockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>></code> | block_device block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.flavorName">flavorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#id ComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>></code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#region ComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#tags ComputeBmsServerV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `adminPass`<sup>Optional</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.adminPass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}.

---

##### `blockDevice`<sup>Optional</sup> <a name="blockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.blockDevice"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>>

block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#block_device ComputeBmsServerV2#block_device}

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.flavorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}.

---

##### `flavorName`<sup>Optional</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.flavorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#id ComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.imageName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.keyPair"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.network"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#network ComputeBmsServerV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#region ComputeBmsServerV2#region}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}.

---

##### `stopBeforeDestroy`<sup>Optional</sup> <a name="stopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.stopBeforeDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#tags ComputeBmsServerV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#timeouts ComputeBmsServerV2#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice">putBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetAdminPass">resetAdminPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetBlockDevice">resetBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorName">resetFlavorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetStopBeforeDestroy">resetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putBlockDevice` <a name="putBlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice"></a>

```java
public void putBlockDevice(IResolvable OR java.util.List<ComputeBmsServerV2BlockDevice> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putBlockDevice.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork"></a>

```java
public void putNetwork(IResolvable OR java.util.List<ComputeBmsServerV2Network> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putNetwork.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts"></a>

```java
public void putTimeouts(ComputeBmsServerV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

---

##### `resetAdminPass` <a name="resetAdminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetAdminPass"></a>

```java
public void resetAdminPass()
```

##### `resetBlockDevice` <a name="resetBlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetBlockDevice"></a>

```java
public void resetBlockDevice()
```

##### `resetFlavorId` <a name="resetFlavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorId"></a>

```java
public void resetFlavorId()
```

##### `resetFlavorName` <a name="resetFlavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetFlavorName"></a>

```java
public void resetFlavorName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetId"></a>

```java
public void resetId()
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetImageName"></a>

```java
public void resetImageName()
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetKeyPair"></a>

```java
public void resetKeyPair()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetStopBeforeDestroy` <a name="resetStopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetStopBeforeDestroy"></a>

```java
public void resetStopBeforeDestroy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeBmsServerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2;

ComputeBmsServerV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2;

ComputeBmsServerV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2;

ComputeBmsServerV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2;

ComputeBmsServerV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeBmsServerV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeBmsServerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeBmsServerV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeBmsServerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBmsServerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV4">accessIpV4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV6">accessIpV6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDevice">blockDevice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList">ComputeBmsServerV2BlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.configDrive">configDrive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostStatus">hostStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList">ComputeBmsServerV2NetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference">ComputeBmsServerV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userId">userId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPassInput">adminPassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDeviceInput">blockDeviceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorIdInput">flavorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorNameInput">flavorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPairInput">keyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.networkInput">networkInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroyInput">stopBeforeDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPass">adminPass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorName">flavorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessIpV4`<sup>Required</sup> <a name="accessIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV4"></a>

```java
public java.lang.String getAccessIpV4();
```

- *Type:* java.lang.String

---

##### `accessIpV6`<sup>Required</sup> <a name="accessIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.accessIpV6"></a>

```java
public java.lang.String getAccessIpV6();
```

- *Type:* java.lang.String

---

##### `blockDevice`<sup>Required</sup> <a name="blockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDevice"></a>

```java
public ComputeBmsServerV2BlockDeviceList getBlockDevice();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList">ComputeBmsServerV2BlockDeviceList</a>

---

##### `configDrive`<sup>Required</sup> <a name="configDrive" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.configDrive"></a>

```java
public IResolvable getConfigDrive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostStatus`<sup>Required</sup> <a name="hostStatus" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.hostStatus"></a>

```java
public java.lang.String getHostStatus();
```

- *Type:* java.lang.String

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.network"></a>

```java
public ComputeBmsServerV2NetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList">ComputeBmsServerV2NetworkList</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeouts"></a>

```java
public ComputeBmsServerV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference">ComputeBmsServerV2TimeoutsOutputReference</a>

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userId"></a>

```java
public java.lang.String getUserId();
```

- *Type:* java.lang.String

---

##### `adminPassInput`<sup>Optional</sup> <a name="adminPassInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPassInput"></a>

```java
public java.lang.String getAdminPassInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `blockDeviceInput`<sup>Optional</sup> <a name="blockDeviceInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.blockDeviceInput"></a>

```java
public java.lang.Object getBlockDeviceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>>

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorIdInput"></a>

```java
public java.lang.String getFlavorIdInput();
```

- *Type:* java.lang.String

---

##### `flavorNameInput`<sup>Optional</sup> <a name="flavorNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorNameInput"></a>

```java
public java.lang.String getFlavorNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPairInput"></a>

```java
public java.lang.String getKeyPairInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.networkInput"></a>

```java
public java.lang.Object getNetworkInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stopBeforeDestroyInput`<sup>Optional</sup> <a name="stopBeforeDestroyInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroyInput"></a>

```java
public java.lang.Object getStopBeforeDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `adminPass`<sup>Required</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.adminPass"></a>

```java
public java.lang.String getAdminPass();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

---

##### `flavorName`<sup>Required</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.flavorName"></a>

```java
public java.lang.String getFlavorName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stopBeforeDestroy`<sup>Required</sup> <a name="stopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.stopBeforeDestroy"></a>

```java
public java.lang.Object getStopBeforeDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBmsServerV2BlockDevice <a name="ComputeBmsServerV2BlockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2BlockDevice;

ComputeBmsServerV2BlockDevice.builder()
    .sourceType(java.lang.String)
//  .bootIndex(java.lang.Number)
//  .deleteOnTermination(java.lang.Boolean)
//  .deleteOnTermination(IResolvable)
//  .destinationType(java.lang.String)
//  .deviceName(java.lang.String)
//  .guestFormat(java.lang.String)
//  .uuid(java.lang.String)
//  .volumeSize(java.lang.Number)
//  .volumeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#source_type ComputeBmsServerV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.bootIndex">bootIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#boot_index ComputeBmsServerV2#boot_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#delete_on_termination ComputeBmsServerV2#delete_on_termination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#destination_type ComputeBmsServerV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#device_name ComputeBmsServerV2#device_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.guestFormat">guestFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#guest_format ComputeBmsServerV2#guest_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#volume_size ComputeBmsServerV2#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#volume_type ComputeBmsServerV2#volume_type}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#source_type ComputeBmsServerV2#source_type}.

---

##### `bootIndex`<sup>Optional</sup> <a name="bootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.bootIndex"></a>

```java
public java.lang.Number getBootIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#boot_index ComputeBmsServerV2#boot_index}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#delete_on_termination ComputeBmsServerV2#delete_on_termination}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#destination_type ComputeBmsServerV2#destination_type}.

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#device_name ComputeBmsServerV2#device_name}.

---

##### `guestFormat`<sup>Optional</sup> <a name="guestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.guestFormat"></a>

```java
public java.lang.String getGuestFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#guest_format ComputeBmsServerV2#guest_format}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#volume_size ComputeBmsServerV2#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#volume_type ComputeBmsServerV2#volume_type}.

---

### ComputeBmsServerV2Config <a name="ComputeBmsServerV2Config" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2Config;

ComputeBmsServerV2Config.builder()
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
    .availabilityZone(java.lang.String)
    .name(java.lang.String)
//  .adminPass(java.lang.String)
//  .blockDevice(IResolvable)
//  .blockDevice(java.util.List<ComputeBmsServerV2BlockDevice>)
//  .flavorId(java.lang.String)
//  .flavorName(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .imageName(java.lang.String)
//  .keyPair(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(IResolvable)
//  .network(java.util.List<ComputeBmsServerV2Network>)
//  .region(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .stopBeforeDestroy(java.lang.Boolean)
//  .stopBeforeDestroy(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ComputeBmsServerV2Timeouts)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.adminPass">adminPass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.blockDevice">blockDevice</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>></code> | block_device block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorName">flavorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#id ComputeBmsServerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.network">network</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>></code> | network block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#region ComputeBmsServerV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#tags ComputeBmsServerV2#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#availability_zone ComputeBmsServerV2#availability_zone}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `adminPass`<sup>Optional</sup> <a name="adminPass" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.adminPass"></a>

```java
public java.lang.String getAdminPass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#admin_pass ComputeBmsServerV2#admin_pass}.

---

##### `blockDevice`<sup>Optional</sup> <a name="blockDevice" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.blockDevice"></a>

```java
public java.lang.Object getBlockDevice();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>>

block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#block_device ComputeBmsServerV2#block_device}

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_id ComputeBmsServerV2#flavor_id}.

---

##### `flavorName`<sup>Optional</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.flavorName"></a>

```java
public java.lang.String getFlavorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#flavor_name ComputeBmsServerV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#id ComputeBmsServerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_id ComputeBmsServerV2#image_id}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#image_name ComputeBmsServerV2#image_name}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#key_pair ComputeBmsServerV2#key_pair}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#metadata ComputeBmsServerV2#metadata}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.network"></a>

```java
public java.lang.Object getNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#network ComputeBmsServerV2#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#region ComputeBmsServerV2#region}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#security_groups ComputeBmsServerV2#security_groups}.

---

##### `stopBeforeDestroy`<sup>Optional</sup> <a name="stopBeforeDestroy" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.stopBeforeDestroy"></a>

```java
public java.lang.Object getStopBeforeDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#stop_before_destroy ComputeBmsServerV2#stop_before_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#tags ComputeBmsServerV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.timeouts"></a>

```java
public ComputeBmsServerV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#timeouts ComputeBmsServerV2#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Config.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#user_data ComputeBmsServerV2#user_data}.

---

### ComputeBmsServerV2Network <a name="ComputeBmsServerV2Network" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2Network;

ComputeBmsServerV2Network.builder()
//  .accessNetwork(java.lang.Boolean)
//  .accessNetwork(IResolvable)
//  .fixedIpV4(java.lang.String)
//  .fixedIpV6(java.lang.String)
//  .name(java.lang.String)
//  .port(java.lang.String)
//  .uuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.accessNetwork">accessNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#access_network ComputeBmsServerV2#access_network}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV4">fixedIpV4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#fixed_ip_v4 ComputeBmsServerV2#fixed_ip_v4}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV6">fixedIpV6</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#fixed_ip_v6 ComputeBmsServerV2#fixed_ip_v6}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#port ComputeBmsServerV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.uuid">uuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}. |

---

##### `accessNetwork`<sup>Optional</sup> <a name="accessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.accessNetwork"></a>

```java
public java.lang.Object getAccessNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#access_network ComputeBmsServerV2#access_network}.

---

##### `fixedIpV4`<sup>Optional</sup> <a name="fixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV4"></a>

```java
public java.lang.String getFixedIpV4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#fixed_ip_v4 ComputeBmsServerV2#fixed_ip_v4}.

---

##### `fixedIpV6`<sup>Optional</sup> <a name="fixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.fixedIpV6"></a>

```java
public java.lang.String getFixedIpV6();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#fixed_ip_v6 ComputeBmsServerV2#fixed_ip_v6}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#name ComputeBmsServerV2#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#port ComputeBmsServerV2#port}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#uuid ComputeBmsServerV2#uuid}.

---

### ComputeBmsServerV2Timeouts <a name="ComputeBmsServerV2Timeouts" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2Timeouts;

ComputeBmsServerV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#create ComputeBmsServerV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#delete ComputeBmsServerV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#update ComputeBmsServerV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#create ComputeBmsServerV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#delete ComputeBmsServerV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/resources/compute_bms_server_v2#update ComputeBmsServerV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBmsServerV2BlockDeviceList <a name="ComputeBmsServerV2BlockDeviceList" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2BlockDeviceList;

new ComputeBmsServerV2BlockDeviceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get"></a>

```java
public ComputeBmsServerV2BlockDeviceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>>

---


### ComputeBmsServerV2BlockDeviceOutputReference <a name="ComputeBmsServerV2BlockDeviceOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2BlockDeviceOutputReference;

new ComputeBmsServerV2BlockDeviceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetBootIndex">resetBootIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeviceName">resetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetGuestFormat">resetGuestFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootIndex` <a name="resetBootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetBootIndex"></a>

```java
public void resetBootIndex()
```

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeleteOnTermination"></a>

```java
public void resetDeleteOnTermination()
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDestinationType"></a>

```java
public void resetDestinationType()
```

##### `resetDeviceName` <a name="resetDeviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetDeviceName"></a>

```java
public void resetDeviceName()
```

##### `resetGuestFormat` <a name="resetGuestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetGuestFormat"></a>

```java
public void resetGuestFormat()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetUuid"></a>

```java
public void resetUuid()
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeSize"></a>

```java
public void resetVolumeSize()
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.resetVolumeType"></a>

```java
public void resetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndexInput">bootIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormatInput">guestFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndex">bootIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormat">guestFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootIndexInput`<sup>Optional</sup> <a name="bootIndexInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndexInput"></a>

```java
public java.lang.Number getBootIndexInput();
```

- *Type:* java.lang.Number

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```java
public java.lang.Object getDeleteOnTerminationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `guestFormatInput`<sup>Optional</sup> <a name="guestFormatInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormatInput"></a>

```java
public java.lang.String getGuestFormatInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSizeInput"></a>

```java
public java.lang.Number getVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `bootIndex`<sup>Required</sup> <a name="bootIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.bootIndex"></a>

```java
public java.lang.Number getBootIndex();
```

- *Type:* java.lang.Number

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.Object getDeleteOnTermination();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `guestFormat`<sup>Required</sup> <a name="guestFormat" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.guestFormat"></a>

```java
public java.lang.String getGuestFormat();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDeviceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2BlockDevice">ComputeBmsServerV2BlockDevice</a>

---


### ComputeBmsServerV2NetworkList <a name="ComputeBmsServerV2NetworkList" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2NetworkList;

new ComputeBmsServerV2NetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get"></a>

```java
public ComputeBmsServerV2NetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>>

---


### ComputeBmsServerV2NetworkOutputReference <a name="ComputeBmsServerV2NetworkOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2NetworkOutputReference;

new ComputeBmsServerV2NetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetAccessNetwork">resetAccessNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV4">resetFixedIpV4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV6">resetFixedIpV6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessNetwork` <a name="resetAccessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetAccessNetwork"></a>

```java
public void resetAccessNetwork()
```

##### `resetFixedIpV4` <a name="resetFixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV4"></a>

```java
public void resetFixedIpV4()
```

##### `resetFixedIpV6` <a name="resetFixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetFixedIpV6"></a>

```java
public void resetFixedIpV6()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetUuid` <a name="resetUuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.resetUuid"></a>

```java
public void resetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.mac">mac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetworkInput">accessNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4Input">fixedIpV4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6Input">fixedIpV6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetwork">accessNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

---

##### `accessNetworkInput`<sup>Optional</sup> <a name="accessNetworkInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetworkInput"></a>

```java
public java.lang.Object getAccessNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fixedIpV4Input`<sup>Optional</sup> <a name="fixedIpV4Input" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4Input"></a>

```java
public java.lang.String getFixedIpV4Input();
```

- *Type:* java.lang.String

---

##### `fixedIpV6Input`<sup>Optional</sup> <a name="fixedIpV6Input" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6Input"></a>

```java
public java.lang.String getFixedIpV6Input();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuidInput"></a>

```java
public java.lang.String getUuidInput();
```

- *Type:* java.lang.String

---

##### `accessNetwork`<sup>Required</sup> <a name="accessNetwork" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.accessNetwork"></a>

```java
public java.lang.Object getAccessNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV4"></a>

```java
public java.lang.String getFixedIpV4();
```

- *Type:* java.lang.String

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.fixedIpV6"></a>

```java
public java.lang.String getFixedIpV6();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2NetworkOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Network">ComputeBmsServerV2Network</a>

---


### ComputeBmsServerV2TimeoutsOutputReference <a name="ComputeBmsServerV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.compute_bms_server_v2.ComputeBmsServerV2TimeoutsOutputReference;

new ComputeBmsServerV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.computeBmsServerV2.ComputeBmsServerV2Timeouts">ComputeBmsServerV2Timeouts</a>

---



