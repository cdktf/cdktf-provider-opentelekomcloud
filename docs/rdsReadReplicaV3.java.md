# `rdsReadReplicaV3` Submodule <a name="`rdsReadReplicaV3` Submodule" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsReadReplicaV3 <a name="RdsReadReplicaV3" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3 opentelekomcloud_rds_read_replica_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3;

RdsReadReplicaV3.Builder.create(Construct scope, java.lang.String id)
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
    .flavorRef(java.lang.String)
    .name(java.lang.String)
    .replicaOfId(java.lang.String)
    .volume(RdsReadReplicaV3Volume)
//  .availabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .publicIps(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .timeouts(RdsReadReplicaV3Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.flavorRef">flavorRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.replicaOfId">replicaOfId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flavorRef`<sup>Required</sup> <a name="flavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.flavorRef"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}.

---

##### `replicaOfId`<sup>Required</sup> <a name="replicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.replicaOfId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#volume RdsReadReplicaV3#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.publicIps"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#timeouts RdsReadReplicaV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetPublicIps">resetPublicIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts"></a>

```java
public void putTimeouts(RdsReadReplicaV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume"></a>

```java
public void putVolume(RdsReadReplicaV3Volume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetId"></a>

```java
public void resetId()
```

##### `resetPublicIps` <a name="resetPublicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetPublicIps"></a>

```java
public void resetPublicIps()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RdsReadReplicaV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3;

RdsReadReplicaV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3;

RdsReadReplicaV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3;

RdsReadReplicaV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3;

RdsReadReplicaV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsReadReplicaV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RdsReadReplicaV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsReadReplicaV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsReadReplicaV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RdsReadReplicaV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.db">db</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList">RdsReadReplicaV3DbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.privateIps">privateIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference">RdsReadReplicaV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference">RdsReadReplicaV3VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRefInput">flavorRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIpsInput">publicIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfIdInput">replicaOfIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRef">flavorRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfId">replicaOfId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `db`<sup>Required</sup> <a name="db" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.db"></a>

```java
public RdsReadReplicaV3DbList getDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList">RdsReadReplicaV3DbList</a>

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.privateIps"></a>

```java
public java.util.List<java.lang.String> getPrivateIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeouts"></a>

```java
public RdsReadReplicaV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference">RdsReadReplicaV3TimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volume"></a>

```java
public RdsReadReplicaV3VolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference">RdsReadReplicaV3VolumeOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `flavorRefInput`<sup>Optional</sup> <a name="flavorRefInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRefInput"></a>

```java
public java.lang.String getFlavorRefInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicIpsInput`<sup>Optional</sup> <a name="publicIpsInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIpsInput"></a>

```java
public java.util.List<java.lang.String> getPublicIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicaOfIdInput`<sup>Optional</sup> <a name="replicaOfIdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfIdInput"></a>

```java
public java.lang.String getReplicaOfIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.volumeInput"></a>

```java
public RdsReadReplicaV3Volume getVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `flavorRef`<sup>Required</sup> <a name="flavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.flavorRef"></a>

```java
public java.lang.String getFlavorRef();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.publicIps"></a>

```java
public java.util.List<java.lang.String> getPublicIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicaOfId`<sup>Required</sup> <a name="replicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.replicaOfId"></a>

```java
public java.lang.String getReplicaOfId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsReadReplicaV3Config <a name="RdsReadReplicaV3Config" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3Config;

RdsReadReplicaV3Config.builder()
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
    .flavorRef(java.lang.String)
    .name(java.lang.String)
    .replicaOfId(java.lang.String)
    .volume(RdsReadReplicaV3Volume)
//  .availabilityZone(java.lang.String)
//  .id(java.lang.String)
//  .publicIps(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .timeouts(RdsReadReplicaV3Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.flavorRef">flavorRef</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.replicaOfId">replicaOfId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.publicIps">publicIps</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flavorRef`<sup>Required</sup> <a name="flavorRef" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.flavorRef"></a>

```java
public java.lang.String getFlavorRef();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#flavor_ref RdsReadReplicaV3#flavor_ref}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#name RdsReadReplicaV3#name}.

---

##### `replicaOfId`<sup>Required</sup> <a name="replicaOfId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.replicaOfId"></a>

```java
public java.lang.String getReplicaOfId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#replica_of_id RdsReadReplicaV3#replica_of_id}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.volume"></a>

```java
public RdsReadReplicaV3Volume getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#volume RdsReadReplicaV3#volume}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#availability_zone RdsReadReplicaV3#availability_zone}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#id RdsReadReplicaV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicIps`<sup>Optional</sup> <a name="publicIps" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.publicIps"></a>

```java
public java.util.List<java.lang.String> getPublicIps();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#public_ips RdsReadReplicaV3#public_ips}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#region RdsReadReplicaV3#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Config.property.timeouts"></a>

```java
public RdsReadReplicaV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#timeouts RdsReadReplicaV3#timeouts}

---

### RdsReadReplicaV3Db <a name="RdsReadReplicaV3Db" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3Db;

RdsReadReplicaV3Db.builder()
    .build();
```


### RdsReadReplicaV3Timeouts <a name="RdsReadReplicaV3Timeouts" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3Timeouts;

RdsReadReplicaV3Timeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#create RdsReadReplicaV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#update RdsReadReplicaV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#create RdsReadReplicaV3#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#update RdsReadReplicaV3#update}.

---

### RdsReadReplicaV3Volume <a name="RdsReadReplicaV3Volume" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3Volume;

RdsReadReplicaV3Volume.builder()
    .type(java.lang.String)
//  .diskEncryptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#type RdsReadReplicaV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.diskEncryptionId">diskEncryptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#type RdsReadReplicaV3#type}.

---

##### `diskEncryptionId`<sup>Optional</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume.property.diskEncryptionId"></a>

```java
public java.lang.String getDiskEncryptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/rds_read_replica_v3#disk_encryption_id RdsReadReplicaV3#disk_encryption_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsReadReplicaV3DbList <a name="RdsReadReplicaV3DbList" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3DbList;

new RdsReadReplicaV3DbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get"></a>

```java
public RdsReadReplicaV3DbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### RdsReadReplicaV3DbOutputReference <a name="RdsReadReplicaV3DbOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3DbOutputReference;

new RdsReadReplicaV3DbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db">RdsReadReplicaV3Db</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3DbOutputReference.property.internalValue"></a>

```java
public RdsReadReplicaV3Db getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Db">RdsReadReplicaV3Db</a>

---


### RdsReadReplicaV3TimeoutsOutputReference <a name="RdsReadReplicaV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3TimeoutsOutputReference;

new RdsReadReplicaV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Timeouts">RdsReadReplicaV3Timeouts</a>

---


### RdsReadReplicaV3VolumeOutputReference <a name="RdsReadReplicaV3VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_read_replica_v3.RdsReadReplicaV3VolumeOutputReference;

new RdsReadReplicaV3VolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resetDiskEncryptionId">resetDiskEncryptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskEncryptionId` <a name="resetDiskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.resetDiskEncryptionId"></a>

```java
public void resetDiskEncryptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionIdInput">diskEncryptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionId">diskEncryptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `diskEncryptionIdInput`<sup>Optional</sup> <a name="diskEncryptionIdInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionIdInput"></a>

```java
public java.lang.String getDiskEncryptionIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionId`<sup>Required</sup> <a name="diskEncryptionId" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.diskEncryptionId"></a>

```java
public java.lang.String getDiskEncryptionId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3VolumeOutputReference.property.internalValue"></a>

```java
public RdsReadReplicaV3Volume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsReadReplicaV3.RdsReadReplicaV3Volume">RdsReadReplicaV3Volume</a>

---



