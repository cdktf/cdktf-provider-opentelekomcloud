# `dehHostV1` Submodule <a name="`dehHostV1` Submodule" id="@cdktf/provider-opentelekomcloud.dehHostV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DehHostV1 <a name="DehHostV1" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1 opentelekomcloud_deh_host_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1;

DehHostV1.Builder.create(Construct scope, java.lang.String id)
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
    .hostType(java.lang.String)
    .name(java.lang.String)
//  .autoPlacement(java.lang.String)
//  .availableInstanceCapacities(IResolvable)
//  .availableInstanceCapacities(java.util.List<DehHostV1AvailableInstanceCapacities>)
//  .availableMemory(java.lang.Number)
//  .availableVcpus(java.lang.Number)
//  .cores(java.lang.Number)
//  .hostTypeName(java.lang.String)
//  .id(java.lang.String)
//  .instanceTotal(java.lang.Number)
//  .instanceUuids(java.util.List<java.lang.String>)
//  .memory(java.lang.Number)
//  .region(java.lang.String)
//  .sockets(java.lang.Number)
//  .status(java.lang.String)
//  .timeouts(DehHostV1Timeouts)
//  .vcpus(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostType">hostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type DehHostV1#host_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#name DehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.autoPlacement">autoPlacement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableInstanceCapacities">availableInstanceCapacities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>></code> | available_instance_capacities block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableMemory">availableMemory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableVcpus">availableVcpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.cores">cores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#cores DehHostV1#cores}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostTypeName">hostTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#id DehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceTotal">instanceTotal</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceUuids">instanceUuids</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.memory">memory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#memory DehHostV1#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#region DehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.sockets">sockets</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#sockets DehHostV1#sockets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#status DehHostV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.vcpus">vcpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}.

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type DehHostV1#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#name DehHostV1#name}.

---

##### `autoPlacement`<sup>Optional</sup> <a name="autoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.autoPlacement"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}.

---

##### `availableInstanceCapacities`<sup>Optional</sup> <a name="availableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableInstanceCapacities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>>

available_instance_capacities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_instance_capacities DehHostV1#available_instance_capacities}

---

##### `availableMemory`<sup>Optional</sup> <a name="availableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableMemory"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}.

---

##### `availableVcpus`<sup>Optional</sup> <a name="availableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.availableVcpus"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.cores"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#cores DehHostV1#cores}.

---

##### `hostTypeName`<sup>Optional</sup> <a name="hostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.hostTypeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#id DehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTotal`<sup>Optional</sup> <a name="instanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceTotal"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}.

---

##### `instanceUuids`<sup>Optional</sup> <a name="instanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.instanceUuids"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.memory"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#memory DehHostV1#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#region DehHostV1#region}.

---

##### `sockets`<sup>Optional</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.sockets"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#sockets DehHostV1#sockets}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#status DehHostV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#timeouts DehHostV1#timeouts}

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.Initializer.parameter.vcpus"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities">putAvailableInstanceCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAutoPlacement">resetAutoPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableInstanceCapacities">resetAvailableInstanceCapacities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableMemory">resetAvailableMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableVcpus">resetAvailableVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetCores">resetCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetHostTypeName">resetHostTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceTotal">resetInstanceTotal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceUuids">resetInstanceUuids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetSockets">resetSockets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetVcpus">resetVcpus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAvailableInstanceCapacities` <a name="putAvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities"></a>

```java
public void putAvailableInstanceCapacities(IResolvable OR java.util.List<DehHostV1AvailableInstanceCapacities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putAvailableInstanceCapacities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts"></a>

```java
public void putTimeouts(DehHostV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

---

##### `resetAutoPlacement` <a name="resetAutoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAutoPlacement"></a>

```java
public void resetAutoPlacement()
```

##### `resetAvailableInstanceCapacities` <a name="resetAvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableInstanceCapacities"></a>

```java
public void resetAvailableInstanceCapacities()
```

##### `resetAvailableMemory` <a name="resetAvailableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableMemory"></a>

```java
public void resetAvailableMemory()
```

##### `resetAvailableVcpus` <a name="resetAvailableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetAvailableVcpus"></a>

```java
public void resetAvailableVcpus()
```

##### `resetCores` <a name="resetCores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetCores"></a>

```java
public void resetCores()
```

##### `resetHostTypeName` <a name="resetHostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetHostTypeName"></a>

```java
public void resetHostTypeName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceTotal` <a name="resetInstanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceTotal"></a>

```java
public void resetInstanceTotal()
```

##### `resetInstanceUuids` <a name="resetInstanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetInstanceUuids"></a>

```java
public void resetInstanceUuids()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSockets` <a name="resetSockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetSockets"></a>

```java
public void resetSockets()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVcpus` <a name="resetVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.resetVcpus"></a>

```java
public void resetVcpus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DehHostV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1;

DehHostV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1;

DehHostV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1;

DehHostV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1;

DehHostV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DehHostV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DehHostV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DehHostV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DehHostV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DehHostV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacities">availableInstanceCapacities</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList">DehHostV1AvailableInstanceCapacitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference">DehHostV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacementInput">autoPlacementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacitiesInput">availableInstanceCapacitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemoryInput">availableMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpusInput">availableVcpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.coresInput">coresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeInput">hostTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeNameInput">hostTypeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotalInput">instanceTotalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuidsInput">instanceUuidsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memoryInput">memoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.socketsInput">socketsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpusInput">vcpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacement">autoPlacement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemory">availableMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpus">availableVcpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cores">cores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostType">hostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeName">hostTypeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotal">instanceTotal</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuids">instanceUuids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memory">memory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.sockets">sockets</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpus">vcpus</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableInstanceCapacities`<sup>Required</sup> <a name="availableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacities"></a>

```java
public DehHostV1AvailableInstanceCapacitiesList getAvailableInstanceCapacities();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList">DehHostV1AvailableInstanceCapacitiesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeouts"></a>

```java
public DehHostV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference">DehHostV1TimeoutsOutputReference</a>

---

##### `autoPlacementInput`<sup>Optional</sup> <a name="autoPlacementInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacementInput"></a>

```java
public java.lang.String getAutoPlacementInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `availableInstanceCapacitiesInput`<sup>Optional</sup> <a name="availableInstanceCapacitiesInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableInstanceCapacitiesInput"></a>

```java
public java.lang.Object getAvailableInstanceCapacitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>>

---

##### `availableMemoryInput`<sup>Optional</sup> <a name="availableMemoryInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemoryInput"></a>

```java
public java.lang.Number getAvailableMemoryInput();
```

- *Type:* java.lang.Number

---

##### `availableVcpusInput`<sup>Optional</sup> <a name="availableVcpusInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpusInput"></a>

```java
public java.lang.Number getAvailableVcpusInput();
```

- *Type:* java.lang.Number

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.coresInput"></a>

```java
public java.lang.Number getCoresInput();
```

- *Type:* java.lang.Number

---

##### `hostTypeInput`<sup>Optional</sup> <a name="hostTypeInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeInput"></a>

```java
public java.lang.String getHostTypeInput();
```

- *Type:* java.lang.String

---

##### `hostTypeNameInput`<sup>Optional</sup> <a name="hostTypeNameInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeNameInput"></a>

```java
public java.lang.String getHostTypeNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTotalInput`<sup>Optional</sup> <a name="instanceTotalInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotalInput"></a>

```java
public java.lang.Number getInstanceTotalInput();
```

- *Type:* java.lang.Number

---

##### `instanceUuidsInput`<sup>Optional</sup> <a name="instanceUuidsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuidsInput"></a>

```java
public java.util.List<java.lang.String> getInstanceUuidsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memoryInput"></a>

```java
public java.lang.Number getMemoryInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `socketsInput`<sup>Optional</sup> <a name="socketsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.socketsInput"></a>

```java
public java.lang.Number getSocketsInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpusInput"></a>

```java
public java.lang.Number getVcpusInput();
```

- *Type:* java.lang.Number

---

##### `autoPlacement`<sup>Required</sup> <a name="autoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.autoPlacement"></a>

```java
public java.lang.String getAutoPlacement();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availableMemory`<sup>Required</sup> <a name="availableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableMemory"></a>

```java
public java.lang.Number getAvailableMemory();
```

- *Type:* java.lang.Number

---

##### `availableVcpus`<sup>Required</sup> <a name="availableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.availableVcpus"></a>

```java
public java.lang.Number getAvailableVcpus();
```

- *Type:* java.lang.Number

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostType"></a>

```java
public java.lang.String getHostType();
```

- *Type:* java.lang.String

---

##### `hostTypeName`<sup>Required</sup> <a name="hostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.hostTypeName"></a>

```java
public java.lang.String getHostTypeName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceTotal`<sup>Required</sup> <a name="instanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceTotal"></a>

```java
public java.lang.Number getInstanceTotal();
```

- *Type:* java.lang.Number

---

##### `instanceUuids`<sup>Required</sup> <a name="instanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.instanceUuids"></a>

```java
public java.util.List<java.lang.String> getInstanceUuids();
```

- *Type:* java.util.List<java.lang.String>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sockets`<sup>Required</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.sockets"></a>

```java
public java.lang.Number getSockets();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.vcpus"></a>

```java
public java.lang.Number getVcpus();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DehHostV1AvailableInstanceCapacities <a name="DehHostV1AvailableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1AvailableInstanceCapacities;

DehHostV1AvailableInstanceCapacities.builder()
    .build();
```


### DehHostV1Config <a name="DehHostV1Config" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1Config;

DehHostV1Config.builder()
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
    .hostType(java.lang.String)
    .name(java.lang.String)
//  .autoPlacement(java.lang.String)
//  .availableInstanceCapacities(IResolvable)
//  .availableInstanceCapacities(java.util.List<DehHostV1AvailableInstanceCapacities>)
//  .availableMemory(java.lang.Number)
//  .availableVcpus(java.lang.Number)
//  .cores(java.lang.Number)
//  .hostTypeName(java.lang.String)
//  .id(java.lang.String)
//  .instanceTotal(java.lang.Number)
//  .instanceUuids(java.util.List<java.lang.String>)
//  .memory(java.lang.Number)
//  .region(java.lang.String)
//  .sockets(java.lang.Number)
//  .status(java.lang.String)
//  .timeouts(DehHostV1Timeouts)
//  .vcpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostType">hostType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type DehHostV1#host_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#name DehHostV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.autoPlacement">autoPlacement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableInstanceCapacities">availableInstanceCapacities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>></code> | available_instance_capacities block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableMemory">availableMemory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableVcpus">availableVcpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.cores">cores</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#cores DehHostV1#cores}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostTypeName">hostTypeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#id DehHostV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceTotal">instanceTotal</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceUuids">instanceUuids</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.memory">memory</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#memory DehHostV1#memory}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#region DehHostV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.sockets">sockets</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#sockets DehHostV1#sockets}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#status DehHostV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.vcpus">vcpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#availability_zone DehHostV1#availability_zone}.

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostType"></a>

```java
public java.lang.String getHostType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type DehHostV1#host_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#name DehHostV1#name}.

---

##### `autoPlacement`<sup>Optional</sup> <a name="autoPlacement" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.autoPlacement"></a>

```java
public java.lang.String getAutoPlacement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#auto_placement DehHostV1#auto_placement}.

---

##### `availableInstanceCapacities`<sup>Optional</sup> <a name="availableInstanceCapacities" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableInstanceCapacities"></a>

```java
public java.lang.Object getAvailableInstanceCapacities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>>

available_instance_capacities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_instance_capacities DehHostV1#available_instance_capacities}

---

##### `availableMemory`<sup>Optional</sup> <a name="availableMemory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableMemory"></a>

```java
public java.lang.Number getAvailableMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_memory DehHostV1#available_memory}.

---

##### `availableVcpus`<sup>Optional</sup> <a name="availableVcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.availableVcpus"></a>

```java
public java.lang.Number getAvailableVcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#available_vcpus DehHostV1#available_vcpus}.

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#cores DehHostV1#cores}.

---

##### `hostTypeName`<sup>Optional</sup> <a name="hostTypeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.hostTypeName"></a>

```java
public java.lang.String getHostTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#host_type_name DehHostV1#host_type_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#id DehHostV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTotal`<sup>Optional</sup> <a name="instanceTotal" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceTotal"></a>

```java
public java.lang.Number getInstanceTotal();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_total DehHostV1#instance_total}.

---

##### `instanceUuids`<sup>Optional</sup> <a name="instanceUuids" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.instanceUuids"></a>

```java
public java.util.List<java.lang.String> getInstanceUuids();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#instance_uuids DehHostV1#instance_uuids}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.memory"></a>

```java
public java.lang.Number getMemory();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#memory DehHostV1#memory}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#region DehHostV1#region}.

---

##### `sockets`<sup>Optional</sup> <a name="sockets" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.sockets"></a>

```java
public java.lang.Number getSockets();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#sockets DehHostV1#sockets}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#status DehHostV1#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.timeouts"></a>

```java
public DehHostV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#timeouts DehHostV1#timeouts}

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Config.property.vcpus"></a>

```java
public java.lang.Number getVcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#vcpus DehHostV1#vcpus}.

---

### DehHostV1Timeouts <a name="DehHostV1Timeouts" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1Timeouts;

DehHostV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#create DehHostV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#delete DehHostV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#create DehHostV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.0/docs/resources/deh_host_v1#delete DehHostV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DehHostV1AvailableInstanceCapacitiesList <a name="DehHostV1AvailableInstanceCapacitiesList" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1AvailableInstanceCapacitiesList;

new DehHostV1AvailableInstanceCapacitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get"></a>

```java
public DehHostV1AvailableInstanceCapacitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>>

---


### DehHostV1AvailableInstanceCapacitiesOutputReference <a name="DehHostV1AvailableInstanceCapacitiesOutputReference" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1AvailableInstanceCapacitiesOutputReference;

new DehHostV1AvailableInstanceCapacitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1AvailableInstanceCapacities">DehHostV1AvailableInstanceCapacities</a>

---


### DehHostV1TimeoutsOutputReference <a name="DehHostV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.deh_host_v1.DehHostV1TimeoutsOutputReference;

new DehHostV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.dehHostV1.DehHostV1Timeouts">DehHostV1Timeouts</a>

---



