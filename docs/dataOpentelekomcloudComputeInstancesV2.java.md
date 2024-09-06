# `dataOpentelekomcloudComputeInstancesV2` Submodule <a name="`dataOpentelekomcloudComputeInstancesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudComputeInstancesV2 <a name="DataOpentelekomcloudComputeInstancesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2 opentelekomcloud_compute_instances_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2;

DataOpentelekomcloudComputeInstancesV2.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityZone(java.lang.String)
//  .flavorId(java.lang.String)
//  .flavorName(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceId(java.lang.String)
//  .keyPair(java.lang.String)
//  .limit(java.lang.Number)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorName">flavorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}.

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}.

---

##### `flavorName`<sup>Optional</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.flavorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.keyPair"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.limit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorName">resetFlavorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetFlavorId` <a name="resetFlavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorId"></a>

```java
public void resetFlavorId()
```

##### `resetFlavorName` <a name="resetFlavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetFlavorName"></a>

```java
public void resetFlavorName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetId"></a>

```java
public void resetId()
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetKeyPair` <a name="resetKeyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetKeyPair"></a>

```java
public void resetKeyPair()
```

##### `resetLimit` <a name="resetLimit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetName"></a>

```java
public void resetName()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudComputeInstancesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2;

DataOpentelekomcloudComputeInstancesV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2;

DataOpentelekomcloudComputeInstancesV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2;

DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2;

DataOpentelekomcloudComputeInstancesV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOpentelekomcloudComputeInstancesV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOpentelekomcloudComputeInstancesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOpentelekomcloudComputeInstancesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOpentelekomcloudComputeInstancesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudComputeInstancesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList">DataOpentelekomcloudComputeInstancesV2InstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorIdInput">flavorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorNameInput">flavorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPairInput">keyPairInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorName">flavorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instances"></a>

```java
public DataOpentelekomcloudComputeInstancesV2InstancesList getInstances();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList">DataOpentelekomcloudComputeInstancesV2InstancesList</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorIdInput"></a>

```java
public java.lang.String getFlavorIdInput();
```

- *Type:* java.lang.String

---

##### `flavorNameInput`<sup>Optional</sup> <a name="flavorNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorNameInput"></a>

```java
public java.lang.String getFlavorNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPairInput"></a>

```java
public java.lang.String getKeyPairInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

---

##### `flavorName`<sup>Required</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.flavorName"></a>

```java
public java.lang.String getFlavorName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudComputeInstancesV2Config <a name="DataOpentelekomcloudComputeInstancesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2Config;

DataOpentelekomcloudComputeInstancesV2Config.builder()
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
//  .availabilityZone(java.lang.String)
//  .flavorId(java.lang.String)
//  .flavorName(java.lang.String)
//  .id(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceId(java.lang.String)
//  .keyPair(java.lang.String)
//  .limit(java.lang.Number)
//  .name(java.lang.String)
//  .projectId(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorName">flavorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.imageId">imageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#availability_zone DataOpentelekomcloudComputeInstancesV2#availability_zone}.

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_id DataOpentelekomcloudComputeInstancesV2#flavor_id}.

---

##### `flavorName`<sup>Optional</sup> <a name="flavorName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.flavorName"></a>

```java
public java.lang.String getFlavorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#flavor_name DataOpentelekomcloudComputeInstancesV2#flavor_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#id DataOpentelekomcloudComputeInstancesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#image_id DataOpentelekomcloudComputeInstancesV2#image_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#instance_id DataOpentelekomcloudComputeInstancesV2#instance_id}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#key_pair DataOpentelekomcloudComputeInstancesV2#key_pair}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#limit DataOpentelekomcloudComputeInstancesV2#limit}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#name DataOpentelekomcloudComputeInstancesV2#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#project_id DataOpentelekomcloudComputeInstancesV2#project_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Config.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/data-sources/compute_instances_v2#status DataOpentelekomcloudComputeInstancesV2#status}.

---

### DataOpentelekomcloudComputeInstancesV2Instances <a name="DataOpentelekomcloudComputeInstancesV2Instances" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2Instances;

DataOpentelekomcloudComputeInstancesV2Instances.builder()
    .build();
```


### DataOpentelekomcloudComputeInstancesV2InstancesNetwork <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetwork" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork;

DataOpentelekomcloudComputeInstancesV2InstancesNetwork.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudComputeInstancesV2InstancesList <a name="DataOpentelekomcloudComputeInstancesV2InstancesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2InstancesList;

new DataOpentelekomcloudComputeInstancesV2InstancesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get"></a>

```java
public DataOpentelekomcloudComputeInstancesV2InstancesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOpentelekomcloudComputeInstancesV2InstancesNetworkList <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetworkList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList;

new DataOpentelekomcloudComputeInstancesV2InstancesNetworkList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get"></a>

```java
public DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference <a name="DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference;

new DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.mac">mac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork">DataOpentelekomcloudComputeInstancesV2InstancesNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV4"></a>

```java
public java.lang.String getFixedIpV4();
```

- *Type:* java.lang.String

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.fixedIpV6"></a>

```java
public java.lang.String getFixedIpV6();
```

- *Type:* java.lang.String

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkOutputReference.property.internalValue"></a>

```java
public DataOpentelekomcloudComputeInstancesV2InstancesNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetwork">DataOpentelekomcloudComputeInstancesV2InstancesNetwork</a>

---


### DataOpentelekomcloudComputeInstancesV2InstancesOutputReference <a name="DataOpentelekomcloudComputeInstancesV2InstancesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.data_opentelekomcloud_compute_instances_v2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference;

new DataOpentelekomcloudComputeInstancesV2InstancesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.flavorId">flavorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.keyPair">keyPair</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList">DataOpentelekomcloudComputeInstancesV2InstancesNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.systemDiskId">systemDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances">DataOpentelekomcloudComputeInstancesV2Instances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.flavorId"></a>

```java
public java.lang.String getFlavorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.keyPair"></a>

```java
public java.lang.String getKeyPair();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.network"></a>

```java
public DataOpentelekomcloudComputeInstancesV2InstancesNetworkList getNetwork();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesNetworkList">DataOpentelekomcloudComputeInstancesV2InstancesNetworkList</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.securityGroupsIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemDiskId`<sup>Required</sup> <a name="systemDiskId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.systemDiskId"></a>

```java
public java.lang.String getSystemDiskId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2InstancesOutputReference.property.internalValue"></a>

```java
public DataOpentelekomcloudComputeInstancesV2Instances getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudComputeInstancesV2.DataOpentelekomcloudComputeInstancesV2Instances">DataOpentelekomcloudComputeInstancesV2Instances</a>

---



