# `sdrsProtectiongroupV1` Submodule <a name="`sdrsProtectiongroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SdrsProtectiongroupV1 <a name="SdrsProtectiongroupV1" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1 opentelekomcloud_sdrs_protectiongroup_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1;

SdrsProtectiongroupV1.Builder.create(Construct scope, java.lang.String id)
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
    .domainId(java.lang.String)
    .name(java.lang.String)
    .sourceAvailabilityZone(java.lang.String)
    .sourceVpcId(java.lang.String)
    .targetAvailabilityZone(java.lang.String)
//  .description(java.lang.String)
//  .drType(java.lang.String)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SdrsProtectiongroupV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.sourceAvailabilityZone">sourceAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.sourceVpcId">sourceVpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.targetAvailabilityZone">targetAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.drType">drType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#enable SdrsProtectiongroupV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}.

---

##### `sourceAvailabilityZone`<sup>Required</sup> <a name="sourceAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.sourceAvailabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}.

---

##### `sourceVpcId`<sup>Required</sup> <a name="sourceVpcId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.sourceVpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}.

---

##### `targetAvailabilityZone`<sup>Required</sup> <a name="targetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.targetAvailabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}.

---

##### `drType`<sup>Optional</sup> <a name="drType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.drType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.enable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#enable SdrsProtectiongroupV1#enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#timeouts SdrsProtectiongroupV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDrType">resetDrType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.putTimeouts"></a>

```java
public void putTimeouts(SdrsProtectiongroupV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDrType` <a name="resetDrType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetDrType"></a>

```java
public void resetDrType()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SdrsProtectiongroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1;

SdrsProtectiongroupV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1;

SdrsProtectiongroupV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1;

SdrsProtectiongroupV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1;

SdrsProtectiongroupV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SdrsProtectiongroupV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SdrsProtectiongroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SdrsProtectiongroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SdrsProtectiongroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SdrsProtectiongroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference">SdrsProtectiongroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drTypeInput">drTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZoneInput">sourceAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcIdInput">sourceVpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZoneInput">targetAvailabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drType">drType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZone">sourceAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcId">sourceVpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZone">targetAvailabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeouts"></a>

```java
public SdrsProtectiongroupV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference">SdrsProtectiongroupV1TimeoutsOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `drTypeInput`<sup>Optional</sup> <a name="drTypeInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drTypeInput"></a>

```java
public java.lang.String getDrTypeInput();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourceAvailabilityZoneInput`<sup>Optional</sup> <a name="sourceAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZoneInput"></a>

```java
public java.lang.String getSourceAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `sourceVpcIdInput`<sup>Optional</sup> <a name="sourceVpcIdInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcIdInput"></a>

```java
public java.lang.String getSourceVpcIdInput();
```

- *Type:* java.lang.String

---

##### `targetAvailabilityZoneInput`<sup>Optional</sup> <a name="targetAvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZoneInput"></a>

```java
public java.lang.String getTargetAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `drType`<sup>Required</sup> <a name="drType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.drType"></a>

```java
public java.lang.String getDrType();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sourceAvailabilityZone`<sup>Required</sup> <a name="sourceAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceAvailabilityZone"></a>

```java
public java.lang.String getSourceAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `sourceVpcId`<sup>Required</sup> <a name="sourceVpcId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.sourceVpcId"></a>

```java
public java.lang.String getSourceVpcId();
```

- *Type:* java.lang.String

---

##### `targetAvailabilityZone`<sup>Required</sup> <a name="targetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.targetAvailabilityZone"></a>

```java
public java.lang.String getTargetAvailabilityZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SdrsProtectiongroupV1Config <a name="SdrsProtectiongroupV1Config" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1Config;

SdrsProtectiongroupV1Config.builder()
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
    .domainId(java.lang.String)
    .name(java.lang.String)
    .sourceAvailabilityZone(java.lang.String)
    .sourceVpcId(java.lang.String)
    .targetAvailabilityZone(java.lang.String)
//  .description(java.lang.String)
//  .drType(java.lang.String)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .id(java.lang.String)
//  .timeouts(SdrsProtectiongroupV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceAvailabilityZone">sourceAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceVpcId">sourceVpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.targetAvailabilityZone">targetAvailabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.drType">drType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#enable SdrsProtectiongroupV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#domain_id SdrsProtectiongroupV1#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#name SdrsProtectiongroupV1#name}.

---

##### `sourceAvailabilityZone`<sup>Required</sup> <a name="sourceAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceAvailabilityZone"></a>

```java
public java.lang.String getSourceAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_availability_zone SdrsProtectiongroupV1#source_availability_zone}.

---

##### `sourceVpcId`<sup>Required</sup> <a name="sourceVpcId" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.sourceVpcId"></a>

```java
public java.lang.String getSourceVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#source_vpc_id SdrsProtectiongroupV1#source_vpc_id}.

---

##### `targetAvailabilityZone`<sup>Required</sup> <a name="targetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.targetAvailabilityZone"></a>

```java
public java.lang.String getTargetAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#target_availability_zone SdrsProtectiongroupV1#target_availability_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#description SdrsProtectiongroupV1#description}.

---

##### `drType`<sup>Optional</sup> <a name="drType" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.drType"></a>

```java
public java.lang.String getDrType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#dr_type SdrsProtectiongroupV1#dr_type}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#enable SdrsProtectiongroupV1#enable}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#id SdrsProtectiongroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Config.property.timeouts"></a>

```java
public SdrsProtectiongroupV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#timeouts SdrsProtectiongroupV1#timeouts}

---

### SdrsProtectiongroupV1Timeouts <a name="SdrsProtectiongroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1Timeouts;

SdrsProtectiongroupV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#create SdrsProtectiongroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#delete SdrsProtectiongroupV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#create SdrsProtectiongroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/sdrs_protectiongroup_v1#delete SdrsProtectiongroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SdrsProtectiongroupV1TimeoutsOutputReference <a name="SdrsProtectiongroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.sdrs_protectiongroup_v1.SdrsProtectiongroupV1TimeoutsOutputReference;

new SdrsProtectiongroupV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.sdrsProtectiongroupV1.SdrsProtectiongroupV1Timeouts">SdrsProtectiongroupV1Timeouts</a>

---



