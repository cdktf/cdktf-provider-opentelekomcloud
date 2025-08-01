# `rmsResourceRecorderV1` Submodule <a name="`rmsResourceRecorderV1` Submodule" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RmsResourceRecorderV1 <a name="RmsResourceRecorderV1" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1 opentelekomcloud_rms_resource_recorder_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1;

RmsResourceRecorderV1.Builder.create(Construct scope, java.lang.String id)
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
    .agencyName(java.lang.String)
    .selector(RmsResourceRecorderV1Selector)
//  .id(java.lang.String)
//  .obsChannel(RmsResourceRecorderV1ObsChannel)
//  .smnChannel(RmsResourceRecorderV1SmnChannel)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.agencyName">agencyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.selector">selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.obsChannel">obsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | obs_channel block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.smnChannel">smnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | smn_channel block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.agencyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.selector"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#selector RmsResourceRecorderV1#selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `obsChannel`<sup>Optional</sup> <a name="obsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.obsChannel"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

obs_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#obs_channel RmsResourceRecorderV1#obs_channel}

---

##### `smnChannel`<sup>Optional</sup> <a name="smnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.Initializer.parameter.smnChannel"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

smn_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#smn_channel RmsResourceRecorderV1#smn_channel}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel">putObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel">putSmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel">resetObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel">resetSmnChannel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putObsChannel` <a name="putObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel"></a>

```java
public void putObsChannel(RmsResourceRecorderV1ObsChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putObsChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `putSelector` <a name="putSelector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector"></a>

```java
public void putSelector(RmsResourceRecorderV1Selector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `putSmnChannel` <a name="putSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel"></a>

```java
public void putSmnChannel(RmsResourceRecorderV1SmnChannel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.putSmnChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetId"></a>

```java
public void resetId()
```

##### `resetObsChannel` <a name="resetObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetObsChannel"></a>

```java
public void resetObsChannel()
```

##### `resetSmnChannel` <a name="resetSmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.resetSmnChannel"></a>

```java
public void resetSmnChannel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1;

RmsResourceRecorderV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1;

RmsResourceRecorderV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1;

RmsResourceRecorderV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1;

RmsResourceRecorderV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RmsResourceRecorderV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RmsResourceRecorderV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RmsResourceRecorderV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RmsResourceRecorderV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RmsResourceRecorderV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel">obsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod">retentionPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel">smnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput">agencyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput">obsChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput">selectorInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput">smnChannelInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `obsChannel`<sup>Required</sup> <a name="obsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannel"></a>

```java
public RmsResourceRecorderV1ObsChannelOutputReference getObsChannel();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference">RmsResourceRecorderV1ObsChannelOutputReference</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.retentionPeriod"></a>

```java
public java.lang.Number getRetentionPeriod();
```

- *Type:* java.lang.Number

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selector"></a>

```java
public RmsResourceRecorderV1SelectorOutputReference getSelector();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference">RmsResourceRecorderV1SelectorOutputReference</a>

---

##### `smnChannel`<sup>Required</sup> <a name="smnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannel"></a>

```java
public RmsResourceRecorderV1SmnChannelOutputReference getSmnChannel();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference">RmsResourceRecorderV1SmnChannelOutputReference</a>

---

##### `agencyNameInput`<sup>Optional</sup> <a name="agencyNameInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyNameInput"></a>

```java
public java.lang.String getAgencyNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `obsChannelInput`<sup>Optional</sup> <a name="obsChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.obsChannelInput"></a>

```java
public RmsResourceRecorderV1ObsChannel getObsChannelInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.selectorInput"></a>

```java
public RmsResourceRecorderV1Selector getSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---

##### `smnChannelInput`<sup>Optional</sup> <a name="smnChannelInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.smnChannelInput"></a>

```java
public RmsResourceRecorderV1SmnChannel getSmnChannelInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RmsResourceRecorderV1Config <a name="RmsResourceRecorderV1Config" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1Config;

RmsResourceRecorderV1Config.builder()
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
    .agencyName(java.lang.String)
    .selector(RmsResourceRecorderV1Selector)
//  .id(java.lang.String)
//  .obsChannel(RmsResourceRecorderV1ObsChannel)
//  .smnChannel(RmsResourceRecorderV1SmnChannel)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName">agencyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel">obsChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | obs_channel block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel">smnChannel</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | smn_channel block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agencyName`<sup>Required</sup> <a name="agencyName" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.agencyName"></a>

```java
public java.lang.String getAgencyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#agency_name RmsResourceRecorderV1#agency_name}.

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.selector"></a>

```java
public RmsResourceRecorderV1Selector getSelector();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#selector RmsResourceRecorderV1#selector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#id RmsResourceRecorderV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `obsChannel`<sup>Optional</sup> <a name="obsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.obsChannel"></a>

```java
public RmsResourceRecorderV1ObsChannel getObsChannel();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

obs_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#obs_channel RmsResourceRecorderV1#obs_channel}

---

##### `smnChannel`<sup>Optional</sup> <a name="smnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Config.property.smnChannel"></a>

```java
public RmsResourceRecorderV1SmnChannel getSmnChannel();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

smn_channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#smn_channel RmsResourceRecorderV1#smn_channel}

---

### RmsResourceRecorderV1ObsChannel <a name="RmsResourceRecorderV1ObsChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1ObsChannel;

RmsResourceRecorderV1ObsChannel.builder()
    .bucket(java.lang.String)
    .region(java.lang.String)
//  .bucketPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#bucket RmsResourceRecorderV1#bucket}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#region RmsResourceRecorderV1#region}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#bucket_prefix RmsResourceRecorderV1#bucket_prefix}.

---

### RmsResourceRecorderV1Selector <a name="RmsResourceRecorderV1Selector" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1Selector;

RmsResourceRecorderV1Selector.builder()
    .allSupported(java.lang.Boolean)
    .allSupported(IResolvable)
//  .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported">allSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}. |

---

##### `allSupported`<sup>Required</sup> <a name="allSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.allSupported"></a>

```java
public java.lang.Object getAllSupported();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#all_supported RmsResourceRecorderV1#all_supported}.

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#resource_types RmsResourceRecorderV1#resource_types}.

---

### RmsResourceRecorderV1SmnChannel <a name="RmsResourceRecorderV1SmnChannel" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1SmnChannel;

RmsResourceRecorderV1SmnChannel.builder()
    .topicUrn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn">topicUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}. |

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel.property.topicUrn"></a>

```java
public java.lang.String getTopicUrn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/rms_resource_recorder_v1#topic_urn RmsResourceRecorderV1#topic_urn}.

---

## Classes <a name="Classes" id="Classes"></a>

### RmsResourceRecorderV1ObsChannelOutputReference <a name="RmsResourceRecorderV1ObsChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1ObsChannelOutputReference;

new RmsResourceRecorderV1ObsChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannelOutputReference.property.internalValue"></a>

```java
public RmsResourceRecorderV1ObsChannel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1ObsChannel">RmsResourceRecorderV1ObsChannel</a>

---


### RmsResourceRecorderV1SelectorOutputReference <a name="RmsResourceRecorderV1SelectorOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1SelectorOutputReference;

new RmsResourceRecorderV1SelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.resetResourceTypes"></a>

```java
public void resetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput">allSupportedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported">allSupported</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allSupportedInput`<sup>Optional</sup> <a name="allSupportedInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupportedInput"></a>

```java
public java.lang.Object getAllSupportedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allSupported`<sup>Required</sup> <a name="allSupported" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.allSupported"></a>

```java
public java.lang.Object getAllSupported();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SelectorOutputReference.property.internalValue"></a>

```java
public RmsResourceRecorderV1Selector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1Selector">RmsResourceRecorderV1Selector</a>

---


### RmsResourceRecorderV1SmnChannelOutputReference <a name="RmsResourceRecorderV1SmnChannelOutputReference" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rms_resource_recorder_v1.RmsResourceRecorderV1SmnChannelOutputReference;

new RmsResourceRecorderV1SmnChannelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput">topicUrnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn">topicUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `topicUrnInput`<sup>Optional</sup> <a name="topicUrnInput" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrnInput"></a>

```java
public java.lang.String getTopicUrnInput();
```

- *Type:* java.lang.String

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.topicUrn"></a>

```java
public java.lang.String getTopicUrn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannelOutputReference.property.internalValue"></a>

```java
public RmsResourceRecorderV1SmnChannel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rmsResourceRecorderV1.RmsResourceRecorderV1SmnChannel">RmsResourceRecorderV1SmnChannel</a>

---



