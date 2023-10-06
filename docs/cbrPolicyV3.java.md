# `opentelekomcloud_cbr_policy_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_cbr_policy_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3).

# `cbrPolicyV3` Submodule <a name="`cbrPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CbrPolicyV3 <a name="CbrPolicyV3" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3 opentelekomcloud_cbr_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3;

CbrPolicyV3.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .operationType(java.lang.String)
    .triggerPattern(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .operationDefinition(CbrPolicyV3OperationDefinition)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationType">operationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.triggerPattern">triggerPattern</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationDefinition">operationDefinition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | operation_definition block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}.

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}.

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.triggerPattern"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationDefinition`<sup>Optional</sup> <a name="operationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.Initializer.parameter.operationDefinition"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

operation_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#operation_definition CbrPolicyV3#operation_definition}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition">putOperationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOperationDefinition">resetOperationDefinition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putOperationDefinition` <a name="putOperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition"></a>

```java
public void putOperationDefinition(CbrPolicyV3OperationDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.putOperationDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetId"></a>

```java
public void resetId()
```

##### `resetOperationDefinition` <a name="resetOperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.resetOperationDefinition"></a>

```java
public void resetOperationDefinition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3;

CbrPolicyV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3;

CbrPolicyV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3;

CbrPolicyV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinition">operationDefinition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference">CbrPolicyV3OperationDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinitionInput">operationDefinitionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationTypeInput">operationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPatternInput">triggerPatternInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationType">operationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPattern">triggerPattern</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `operationDefinition`<sup>Required</sup> <a name="operationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinition"></a>

```java
public CbrPolicyV3OperationDefinitionOutputReference getOperationDefinition();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference">CbrPolicyV3OperationDefinitionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationDefinitionInput`<sup>Optional</sup> <a name="operationDefinitionInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationDefinitionInput"></a>

```java
public CbrPolicyV3OperationDefinition getOperationDefinitionInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---

##### `operationTypeInput`<sup>Optional</sup> <a name="operationTypeInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationTypeInput"></a>

```java
public java.lang.String getOperationTypeInput();
```

- *Type:* java.lang.String

---

##### `triggerPatternInput`<sup>Optional</sup> <a name="triggerPatternInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPatternInput"></a>

```java
public java.util.List<java.lang.String> getTriggerPatternInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.triggerPattern"></a>

```java
public java.util.List<java.lang.String> getTriggerPattern();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CbrPolicyV3Config <a name="CbrPolicyV3Config" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3Config;

CbrPolicyV3Config.builder()
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
    .name(java.lang.String)
    .operationType(java.lang.String)
    .triggerPattern(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .operationDefinition(CbrPolicyV3OperationDefinition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationType">operationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.triggerPattern">triggerPattern</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationDefinition">operationDefinition</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | operation_definition block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#name CbrPolicyV3#name}.

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#operation_type CbrPolicyV3#operation_type}.

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.triggerPattern"></a>

```java
public java.util.List<java.lang.String> getTriggerPattern();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#trigger_pattern CbrPolicyV3#trigger_pattern}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#enabled CbrPolicyV3#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#id CbrPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operationDefinition`<sup>Optional</sup> <a name="operationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3Config.property.operationDefinition"></a>

```java
public CbrPolicyV3OperationDefinition getOperationDefinition();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

operation_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#operation_definition CbrPolicyV3#operation_definition}

---

### CbrPolicyV3OperationDefinition <a name="CbrPolicyV3OperationDefinition" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3OperationDefinition;

CbrPolicyV3OperationDefinition.builder()
    .timezone(java.lang.String)
//  .dayBackups(java.lang.Number)
//  .maxBackups(java.lang.Number)
//  .monthBackups(java.lang.Number)
//  .retentionDurationDays(java.lang.Number)
//  .weekBackups(java.lang.Number)
//  .yearBackups(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.dayBackups">dayBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.maxBackups">maxBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.monthBackups">monthBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.weekBackups">weekBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.yearBackups">yearBackups</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}. |

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#timezone CbrPolicyV3#timezone}.

---

##### `dayBackups`<sup>Optional</sup> <a name="dayBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.dayBackups"></a>

```java
public java.lang.Number getDayBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#day_backups CbrPolicyV3#day_backups}.

---

##### `maxBackups`<sup>Optional</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.maxBackups"></a>

```java
public java.lang.Number getMaxBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#max_backups CbrPolicyV3#max_backups}.

---

##### `monthBackups`<sup>Optional</sup> <a name="monthBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.monthBackups"></a>

```java
public java.lang.Number getMonthBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#month_backups CbrPolicyV3#month_backups}.

---

##### `retentionDurationDays`<sup>Optional</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#retention_duration_days CbrPolicyV3#retention_duration_days}.

---

##### `weekBackups`<sup>Optional</sup> <a name="weekBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.weekBackups"></a>

```java
public java.lang.Number getWeekBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#week_backups CbrPolicyV3#week_backups}.

---

##### `yearBackups`<sup>Optional</sup> <a name="yearBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition.property.yearBackups"></a>

```java
public java.lang.Number getYearBackups();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/cbr_policy_v3#year_backups CbrPolicyV3#year_backups}.

---

## Classes <a name="Classes" id="Classes"></a>

### CbrPolicyV3OperationDefinitionOutputReference <a name="CbrPolicyV3OperationDefinitionOutputReference" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.cbr_policy_v3.CbrPolicyV3OperationDefinitionOutputReference;

new CbrPolicyV3OperationDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetDayBackups">resetDayBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMaxBackups">resetMaxBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMonthBackups">resetMonthBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetRetentionDurationDays">resetRetentionDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetWeekBackups">resetWeekBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetYearBackups">resetYearBackups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayBackups` <a name="resetDayBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetDayBackups"></a>

```java
public void resetDayBackups()
```

##### `resetMaxBackups` <a name="resetMaxBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMaxBackups"></a>

```java
public void resetMaxBackups()
```

##### `resetMonthBackups` <a name="resetMonthBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetMonthBackups"></a>

```java
public void resetMonthBackups()
```

##### `resetRetentionDurationDays` <a name="resetRetentionDurationDays" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetRetentionDurationDays"></a>

```java
public void resetRetentionDurationDays()
```

##### `resetWeekBackups` <a name="resetWeekBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetWeekBackups"></a>

```java
public void resetWeekBackups()
```

##### `resetYearBackups` <a name="resetYearBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.resetYearBackups"></a>

```java
public void resetYearBackups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackupsInput">dayBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackupsInput">maxBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackupsInput">monthBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDaysInput">retentionDurationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackupsInput">weekBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackupsInput">yearBackupsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackups">dayBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackups">maxBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackups">monthBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackups">weekBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackups">yearBackups</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayBackupsInput`<sup>Optional</sup> <a name="dayBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackupsInput"></a>

```java
public java.lang.Number getDayBackupsInput();
```

- *Type:* java.lang.Number

---

##### `maxBackupsInput`<sup>Optional</sup> <a name="maxBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackupsInput"></a>

```java
public java.lang.Number getMaxBackupsInput();
```

- *Type:* java.lang.Number

---

##### `monthBackupsInput`<sup>Optional</sup> <a name="monthBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackupsInput"></a>

```java
public java.lang.Number getMonthBackupsInput();
```

- *Type:* java.lang.Number

---

##### `retentionDurationDaysInput`<sup>Optional</sup> <a name="retentionDurationDaysInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDaysInput"></a>

```java
public java.lang.Number getRetentionDurationDaysInput();
```

- *Type:* java.lang.Number

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `weekBackupsInput`<sup>Optional</sup> <a name="weekBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackupsInput"></a>

```java
public java.lang.Number getWeekBackupsInput();
```

- *Type:* java.lang.Number

---

##### `yearBackupsInput`<sup>Optional</sup> <a name="yearBackupsInput" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackupsInput"></a>

```java
public java.lang.Number getYearBackupsInput();
```

- *Type:* java.lang.Number

---

##### `dayBackups`<sup>Required</sup> <a name="dayBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.dayBackups"></a>

```java
public java.lang.Number getDayBackups();
```

- *Type:* java.lang.Number

---

##### `maxBackups`<sup>Required</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.maxBackups"></a>

```java
public java.lang.Number getMaxBackups();
```

- *Type:* java.lang.Number

---

##### `monthBackups`<sup>Required</sup> <a name="monthBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.monthBackups"></a>

```java
public java.lang.Number getMonthBackups();
```

- *Type:* java.lang.Number

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.retentionDurationDays"></a>

```java
public java.lang.Number getRetentionDurationDays();
```

- *Type:* java.lang.Number

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `weekBackups`<sup>Required</sup> <a name="weekBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.weekBackups"></a>

```java
public java.lang.Number getWeekBackups();
```

- *Type:* java.lang.Number

---

##### `yearBackups`<sup>Required</sup> <a name="yearBackups" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.yearBackups"></a>

```java
public java.lang.Number getYearBackups();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinitionOutputReference.property.internalValue"></a>

```java
public CbrPolicyV3OperationDefinition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cbrPolicyV3.CbrPolicyV3OperationDefinition">CbrPolicyV3OperationDefinition</a>

---



