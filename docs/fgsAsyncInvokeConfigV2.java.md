# `fgsAsyncInvokeConfigV2` Submodule <a name="`fgsAsyncInvokeConfigV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsAsyncInvokeConfigV2 <a name="FgsAsyncInvokeConfigV2" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2 opentelekomcloud_fgs_async_invoke_config_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2;

FgsAsyncInvokeConfigV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionUrn(java.lang.String)
    .maxAsyncEventAgeInSeconds(java.lang.Number)
    .maxAsyncRetryAttempts(java.lang.Number)
//  .id(java.lang.String)
//  .onFailure(FgsAsyncInvokeConfigV2OnFailure)
//  .onSuccess(FgsAsyncInvokeConfigV2OnSuccess)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.functionUrn">functionUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.maxAsyncEventAgeInSeconds">maxAsyncEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.maxAsyncRetryAttempts">maxAsyncRetryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | on_success block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.functionUrn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}.

---

##### `maxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="maxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.maxAsyncEventAgeInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}.

---

##### `maxAsyncRetryAttempts`<sup>Required</sup> <a name="maxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.maxAsyncRetryAttempts"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.onFailure"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#on_failure FgsAsyncInvokeConfigV2#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.onSuccess"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#on_success FgsAsyncInvokeConfigV2#on_success}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess">putOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess">resetOnSuccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure"></a>

```java
public void putOnFailure(FgsAsyncInvokeConfigV2OnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `putOnSuccess` <a name="putOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess"></a>

```java
public void putOnSuccess(FgsAsyncInvokeConfigV2OnSuccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId"></a>

```java
public void resetId()
```

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure"></a>

```java
public void resetOnFailure()
```

##### `resetOnSuccess` <a name="resetOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess"></a>

```java
public void resetOnSuccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2;

FgsAsyncInvokeConfigV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2;

FgsAsyncInvokeConfigV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2;

FgsAsyncInvokeConfigV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2;

FgsAsyncInvokeConfigV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FgsAsyncInvokeConfigV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FgsAsyncInvokeConfigV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FgsAsyncInvokeConfigV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FgsAsyncInvokeConfigV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput">functionUrnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput">maxAsyncEventAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput">maxAsyncRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput">onSuccessInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn">functionUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds">maxAsyncEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts">maxAsyncRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure"></a>

```java
public FgsAsyncInvokeConfigV2OnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess"></a>

```java
public FgsAsyncInvokeConfigV2OnSuccessOutputReference getOnSuccess();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput"></a>

```java
public java.lang.String getFunctionUrnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxAsyncEventAgeInSecondsInput`<sup>Optional</sup> <a name="maxAsyncEventAgeInSecondsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput"></a>

```java
public java.lang.Number getMaxAsyncEventAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxAsyncRetryAttemptsInput`<sup>Optional</sup> <a name="maxAsyncRetryAttemptsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput"></a>

```java
public java.lang.Number getMaxAsyncRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput"></a>

```java
public FgsAsyncInvokeConfigV2OnFailure getOnFailureInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `onSuccessInput`<sup>Optional</sup> <a name="onSuccessInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput"></a>

```java
public FgsAsyncInvokeConfigV2OnSuccess getOnSuccessInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn"></a>

```java
public java.lang.String getFunctionUrn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="maxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds"></a>

```java
public java.lang.Number getMaxAsyncEventAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maxAsyncRetryAttempts`<sup>Required</sup> <a name="maxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts"></a>

```java
public java.lang.Number getMaxAsyncRetryAttempts();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FgsAsyncInvokeConfigV2Config <a name="FgsAsyncInvokeConfigV2Config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2Config;

FgsAsyncInvokeConfigV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionUrn(java.lang.String)
    .maxAsyncEventAgeInSeconds(java.lang.Number)
    .maxAsyncRetryAttempts(java.lang.Number)
//  .id(java.lang.String)
//  .onFailure(FgsAsyncInvokeConfigV2OnFailure)
//  .onSuccess(FgsAsyncInvokeConfigV2OnSuccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn">functionUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds">maxAsyncEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts">maxAsyncRetryAttempts</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | on_success block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn"></a>

```java
public java.lang.String getFunctionUrn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}.

---

##### `maxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="maxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds"></a>

```java
public java.lang.Number getMaxAsyncEventAgeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}.

---

##### `maxAsyncRetryAttempts`<sup>Required</sup> <a name="maxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts"></a>

```java
public java.lang.Number getMaxAsyncRetryAttempts();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure"></a>

```java
public FgsAsyncInvokeConfigV2OnFailure getOnFailure();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#on_failure FgsAsyncInvokeConfigV2#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess"></a>

```java
public FgsAsyncInvokeConfigV2OnSuccess getOnSuccess();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#on_success FgsAsyncInvokeConfigV2#on_success}

---

### FgsAsyncInvokeConfigV2OnFailure <a name="FgsAsyncInvokeConfigV2OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2OnFailure;

FgsAsyncInvokeConfigV2OnFailure.builder()
    .destination(java.lang.String)
    .param(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param">param</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param"></a>

```java
public java.lang.String getParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

### FgsAsyncInvokeConfigV2OnSuccess <a name="FgsAsyncInvokeConfigV2OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2OnSuccess;

FgsAsyncInvokeConfigV2OnSuccess.builder()
    .destination(java.lang.String)
    .param(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination">destination</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param">param</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param"></a>

```java
public java.lang.String getParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsAsyncInvokeConfigV2OnFailureOutputReference <a name="FgsAsyncInvokeConfigV2OnFailureOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2OnFailureOutputReference;

new FgsAsyncInvokeConfigV2OnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput">paramInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param">param</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `paramInput`<sup>Optional</sup> <a name="paramInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput"></a>

```java
public java.lang.String getParamInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param"></a>

```java
public java.lang.String getParam();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue"></a>

```java
public FgsAsyncInvokeConfigV2OnFailure getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---


### FgsAsyncInvokeConfigV2OnSuccessOutputReference <a name="FgsAsyncInvokeConfigV2OnSuccessOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fgs_async_invoke_config_v2.FgsAsyncInvokeConfigV2OnSuccessOutputReference;

new FgsAsyncInvokeConfigV2OnSuccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput">paramInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param">param</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `paramInput`<sup>Optional</sup> <a name="paramInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput"></a>

```java
public java.lang.String getParamInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param"></a>

```java
public java.lang.String getParam();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue"></a>

```java
public FgsAsyncInvokeConfigV2OnSuccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---



