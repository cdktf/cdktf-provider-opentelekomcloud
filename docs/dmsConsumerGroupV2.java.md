# `dmsConsumerGroupV2` Submodule <a name="`dmsConsumerGroupV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsConsumerGroupV2 <a name="DmsConsumerGroupV2" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2 opentelekomcloud_dms_consumer_group_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2;

DmsConsumerGroupV2.Builder.create(Construct scope, java.lang.String id)
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
    .groupName(java.lang.String)
    .instanceId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.groupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2;

DmsConsumerGroupV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2;

DmsConsumerGroupV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2;

DmsConsumerGroupV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2;

DmsConsumerGroupV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsConsumerGroupV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DmsConsumerGroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsConsumerGroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsConsumerGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DmsConsumerGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy">assignmentStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId">coordinatorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets">groupMessageOffsets</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members">members</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignmentStrategy`<sup>Required</sup> <a name="assignmentStrategy" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.assignmentStrategy"></a>

```java
public java.lang.String getAssignmentStrategy();
```

- *Type:* java.lang.String

---

##### `coordinatorId`<sup>Required</sup> <a name="coordinatorId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.coordinatorId"></a>

```java
public java.lang.Number getCoordinatorId();
```

- *Type:* java.lang.Number

---

##### `groupMessageOffsets`<sup>Required</sup> <a name="groupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupMessageOffsets"></a>

```java
public DmsConsumerGroupV2GroupMessageOffsetsList getGroupMessageOffsets();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList">DmsConsumerGroupV2GroupMessageOffsetsList</a>

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.members"></a>

```java
public DmsConsumerGroupV2MembersList getMembers();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList">DmsConsumerGroupV2MembersList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsConsumerGroupV2Config <a name="DmsConsumerGroupV2Config" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2Config;

DmsConsumerGroupV2Config.builder()
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
    .groupName(java.lang.String)
    .instanceId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#group_name DmsConsumerGroupV2#group_name}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#instance_id DmsConsumerGroupV2#instance_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#description DmsConsumerGroupV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/dms_consumer_group_v2#id DmsConsumerGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DmsConsumerGroupV2GroupMessageOffsets <a name="DmsConsumerGroupV2GroupMessageOffsets" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2GroupMessageOffsets;

DmsConsumerGroupV2GroupMessageOffsets.builder()
    .build();
```


### DmsConsumerGroupV2Members <a name="DmsConsumerGroupV2Members" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2Members;

DmsConsumerGroupV2Members.builder()
    .build();
```


### DmsConsumerGroupV2MembersAssignments <a name="DmsConsumerGroupV2MembersAssignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2MembersAssignments;

DmsConsumerGroupV2MembersAssignments.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DmsConsumerGroupV2GroupMessageOffsetsList <a name="DmsConsumerGroupV2GroupMessageOffsetsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2GroupMessageOffsetsList;

new DmsConsumerGroupV2GroupMessageOffsetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get"></a>

```java
public DmsConsumerGroupV2GroupMessageOffsetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DmsConsumerGroupV2GroupMessageOffsetsOutputReference <a name="DmsConsumerGroupV2GroupMessageOffsetsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference;

new DmsConsumerGroupV2GroupMessageOffsetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag">lag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset">messageCurrentOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset">messageLogEndOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lag`<sup>Required</sup> <a name="lag" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.lag"></a>

```java
public java.lang.Number getLag();
```

- *Type:* java.lang.Number

---

##### `messageCurrentOffset`<sup>Required</sup> <a name="messageCurrentOffset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageCurrentOffset"></a>

```java
public java.lang.Number getMessageCurrentOffset();
```

- *Type:* java.lang.Number

---

##### `messageLogEndOffset`<sup>Required</sup> <a name="messageLogEndOffset" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.messageLogEndOffset"></a>

```java
public java.lang.Number getMessageLogEndOffset();
```

- *Type:* java.lang.Number

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsetsOutputReference.property.internalValue"></a>

```java
public DmsConsumerGroupV2GroupMessageOffsets getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2GroupMessageOffsets">DmsConsumerGroupV2GroupMessageOffsets</a>

---


### DmsConsumerGroupV2MembersAssignmentsList <a name="DmsConsumerGroupV2MembersAssignmentsList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2MembersAssignmentsList;

new DmsConsumerGroupV2MembersAssignmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get"></a>

```java
public DmsConsumerGroupV2MembersAssignmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DmsConsumerGroupV2MembersAssignmentsOutputReference <a name="DmsConsumerGroupV2MembersAssignmentsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2MembersAssignmentsOutputReference;

new DmsConsumerGroupV2MembersAssignmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions">partitions</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.partitions"></a>

```java
public java.util.List<java.lang.Number> getPartitions();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsOutputReference.property.internalValue"></a>

```java
public DmsConsumerGroupV2MembersAssignments getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignments">DmsConsumerGroupV2MembersAssignments</a>

---


### DmsConsumerGroupV2MembersList <a name="DmsConsumerGroupV2MembersList" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2MembersList;

new DmsConsumerGroupV2MembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get"></a>

```java
public DmsConsumerGroupV2MembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DmsConsumerGroupV2MembersOutputReference <a name="DmsConsumerGroupV2MembersOutputReference" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.dms_consumer_group_v2.DmsConsumerGroupV2MembersOutputReference;

new DmsConsumerGroupV2MembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments">assignments</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId">memberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.assignments"></a>

```java
public DmsConsumerGroupV2MembersAssignmentsList getAssignments();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersAssignmentsList">DmsConsumerGroupV2MembersAssignmentsList</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.memberId"></a>

```java
public java.lang.String getMemberId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2MembersOutputReference.property.internalValue"></a>

```java
public DmsConsumerGroupV2Members getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsConsumerGroupV2.DmsConsumerGroupV2Members">DmsConsumerGroupV2Members</a>

---



