# `opentelekomcloud_as_configuration_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_as_configuration_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1).

# `asConfigurationV1` Submodule <a name="`asConfigurationV1` Submodule" id="@cdktf/provider-opentelekomcloud.asConfigurationV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsConfigurationV1 <a name="AsConfigurationV1" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1 opentelekomcloud_as_configuration_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1;

AsConfigurationV1.Builder.create(Construct scope, java.lang.String id)
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
    .instanceConfig(AsConfigurationV1InstanceConfig)
    .scalingConfigurationName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.instanceConfig">instanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | instance_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scalingConfigurationName">scalingConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#id AsConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#region AsConfigurationV1#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceConfig`<sup>Required</sup> <a name="instanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.instanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#instance_config AsConfigurationV1#instance_config}

---

##### `scalingConfigurationName`<sup>Required</sup> <a name="scalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.scalingConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#id AsConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#region AsConfigurationV1#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig">putInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putInstanceConfig` <a name="putInstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig"></a>

```java
public void putInstanceConfig(AsConfigurationV1InstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.putInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1;

AsConfigurationV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1;

AsConfigurationV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1;

AsConfigurationV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfig">instanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference">AsConfigurationV1InstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfigInput">instanceConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationNameInput">scalingConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationName">scalingConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceConfig`<sup>Required</sup> <a name="instanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfig"></a>

```java
public AsConfigurationV1InstanceConfigOutputReference getInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference">AsConfigurationV1InstanceConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceConfigInput`<sup>Optional</sup> <a name="instanceConfigInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.instanceConfigInput"></a>

```java
public AsConfigurationV1InstanceConfig getInstanceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationNameInput`<sup>Optional</sup> <a name="scalingConfigurationNameInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationNameInput"></a>

```java
public java.lang.String getScalingConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationName`<sup>Required</sup> <a name="scalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.scalingConfigurationName"></a>

```java
public java.lang.String getScalingConfigurationName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AsConfigurationV1Config <a name="AsConfigurationV1Config" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1Config;

AsConfigurationV1Config.builder()
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
    .instanceConfig(AsConfigurationV1InstanceConfig)
    .scalingConfigurationName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.instanceConfig">instanceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | instance_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.scalingConfigurationName">scalingConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#id AsConfigurationV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#region AsConfigurationV1#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceConfig`<sup>Required</sup> <a name="instanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.instanceConfig"></a>

```java
public AsConfigurationV1InstanceConfig getInstanceConfig();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#instance_config AsConfigurationV1#instance_config}

---

##### `scalingConfigurationName`<sup>Required</sup> <a name="scalingConfigurationName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.scalingConfigurationName"></a>

```java
public java.lang.String getScalingConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#scaling_configuration_name AsConfigurationV1#scaling_configuration_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#id AsConfigurationV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#region AsConfigurationV1#region}.

---

### AsConfigurationV1InstanceConfig <a name="AsConfigurationV1InstanceConfig" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfig;

AsConfigurationV1InstanceConfig.builder()
    .keyName(java.lang.String)
//  .disk(IResolvable)
//  .disk(java.util.List<AsConfigurationV1InstanceConfigDisk>)
//  .flavor(java.lang.String)
//  .image(java.lang.String)
//  .instanceId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .personality(IResolvable)
//  .personality(java.util.List<AsConfigurationV1InstanceConfigPersonality>)
//  .publicIp(AsConfigurationV1InstanceConfigPublicIp)
//  .securityGroups(java.util.List<java.lang.String>)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#key_name AsConfigurationV1#key_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.flavor">flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#flavor AsConfigurationV1#flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#image AsConfigurationV1#image}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#instance_id AsConfigurationV1#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#metadata AsConfigurationV1#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.personality">personality</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>></code> | personality block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#security_groups AsConfigurationV1#security_groups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#user_data AsConfigurationV1#user_data}. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#key_name AsConfigurationV1#key_name}.

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#disk AsConfigurationV1#disk}

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#flavor AsConfigurationV1#flavor}.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#image AsConfigurationV1#image}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#instance_id AsConfigurationV1#instance_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#metadata AsConfigurationV1#metadata}.

---

##### `personality`<sup>Optional</sup> <a name="personality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.personality"></a>

```java
public java.lang.Object getPersonality();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>>

personality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#personality AsConfigurationV1#personality}

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.publicIp"></a>

```java
public AsConfigurationV1InstanceConfigPublicIp getPublicIp();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#public_ip AsConfigurationV1#public_ip}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#security_groups AsConfigurationV1#security_groups}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#user_data AsConfigurationV1#user_data}.

---

### AsConfigurationV1InstanceConfigDisk <a name="AsConfigurationV1InstanceConfigDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigDisk;

AsConfigurationV1InstanceConfigDisk.builder()
    .diskType(java.lang.String)
    .size(java.lang.Number)
    .volumeType(java.lang.String)
//  .kmsId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.diskType">diskType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#disk_type AsConfigurationV1#disk_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#size AsConfigurationV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#volume_type AsConfigurationV1#volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#kms_id AsConfigurationV1#kms_id}. |

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#disk_type AsConfigurationV1#disk_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#size AsConfigurationV1#size}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#volume_type AsConfigurationV1#volume_type}.

---

##### `kmsId`<sup>Optional</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#kms_id AsConfigurationV1#kms_id}.

---

### AsConfigurationV1InstanceConfigPersonality <a name="AsConfigurationV1InstanceConfigPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPersonality;

AsConfigurationV1InstanceConfigPersonality.builder()
    .content(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#content AsConfigurationV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#path AsConfigurationV1#path}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#content AsConfigurationV1#content}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#path AsConfigurationV1#path}.

---

### AsConfigurationV1InstanceConfigPublicIp <a name="AsConfigurationV1InstanceConfigPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPublicIp;

AsConfigurationV1InstanceConfigPublicIp.builder()
    .eip(AsConfigurationV1InstanceConfigPublicIpEip)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.property.eip">eip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | eip block. |

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp.property.eip"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEip getEip();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

eip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#eip AsConfigurationV1#eip}

---

### AsConfigurationV1InstanceConfigPublicIpEip <a name="AsConfigurationV1InstanceConfigPublicIpEip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPublicIpEip;

AsConfigurationV1InstanceConfigPublicIpEip.builder()
    .bandwidth(AsConfigurationV1InstanceConfigPublicIpEipBandwidth)
    .ipType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | bandwidth block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.ipType">ipType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#ip_type AsConfigurationV1#ip_type}. |

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.bandwidth"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEipBandwidth getBandwidth();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

bandwidth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#bandwidth AsConfigurationV1#bandwidth}

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#ip_type AsConfigurationV1#ip_type}.

---

### AsConfigurationV1InstanceConfigPublicIpEipBandwidth <a name="AsConfigurationV1InstanceConfigPublicIpEipBandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth;

AsConfigurationV1InstanceConfigPublicIpEipBandwidth.builder()
    .chargingMode(java.lang.String)
    .shareType(java.lang.String)
    .size(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.chargingMode">chargingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.shareType">shareType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#share_type AsConfigurationV1#share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#size AsConfigurationV1#size}. |

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.chargingMode"></a>

```java
public java.lang.String getChargingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#charging_mode AsConfigurationV1#charging_mode}.

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#share_type AsConfigurationV1#share_type}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/as_configuration_v1#size AsConfigurationV1#size}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsConfigurationV1InstanceConfigDiskList <a name="AsConfigurationV1InstanceConfigDiskList" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigDiskList;

new AsConfigurationV1InstanceConfigDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get"></a>

```java
public AsConfigurationV1InstanceConfigDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>>

---


### AsConfigurationV1InstanceConfigDiskOutputReference <a name="AsConfigurationV1InstanceConfigDiskOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigDiskOutputReference;

new AsConfigurationV1InstanceConfigDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resetKmsId">resetKmsId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsId` <a name="resetKmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.resetKmsId"></a>

```java
public void resetKmsId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsIdInput">kmsIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsId">kmsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `kmsIdInput`<sup>Optional</sup> <a name="kmsIdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsIdInput"></a>

```java
public java.lang.String getKmsIdInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeTypeInput"></a>

```java
public java.lang.String getVolumeTypeInput();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `kmsId`<sup>Required</sup> <a name="kmsId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.kmsId"></a>

```java
public java.lang.String getKmsId();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>

---


### AsConfigurationV1InstanceConfigOutputReference <a name="AsConfigurationV1InstanceConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigOutputReference;

new AsConfigurationV1InstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality">putPersonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp">putPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetFlavor">resetFlavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPersonality">resetPersonality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPublicIp">resetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisk` <a name="putDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<AsConfigurationV1InstanceConfigDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>>

---

##### `putPersonality` <a name="putPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality"></a>

```java
public void putPersonality(IResolvable OR java.util.List<AsConfigurationV1InstanceConfigPersonality> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPersonality.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>>

---

##### `putPublicIp` <a name="putPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp"></a>

```java
public void putPublicIp(AsConfigurationV1InstanceConfigPublicIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetFlavor` <a name="resetFlavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetFlavor"></a>

```java
public void resetFlavor()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetPersonality` <a name="resetPersonality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPersonality"></a>

```java
public void resetPersonality()
```

##### `resetPublicIp` <a name="resetPublicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetPublicIp"></a>

```java
public void resetPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.resetUserData"></a>

```java
public void resetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList">AsConfigurationV1InstanceConfigDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personality">personality</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList">AsConfigurationV1InstanceConfigPersonalityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference">AsConfigurationV1InstanceConfigPublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavorInput">flavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personalityInput">personalityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIpInput">publicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavor">flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.disk"></a>

```java
public AsConfigurationV1InstanceConfigDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDiskList">AsConfigurationV1InstanceConfigDiskList</a>

---

##### `personality`<sup>Required</sup> <a name="personality" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personality"></a>

```java
public AsConfigurationV1InstanceConfigPersonalityList getPersonality();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList">AsConfigurationV1InstanceConfigPersonalityList</a>

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIp"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpOutputReference getPublicIp();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference">AsConfigurationV1InstanceConfigPublicIpOutputReference</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigDisk">AsConfigurationV1InstanceConfigDisk</a>>

---

##### `flavorInput`<sup>Optional</sup> <a name="flavorInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavorInput"></a>

```java
public java.lang.String getFlavorInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `personalityInput`<sup>Optional</sup> <a name="personalityInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.personalityInput"></a>

```java
public java.lang.Object getPersonalityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>>

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.publicIpInput"></a>

```java
public AsConfigurationV1InstanceConfigPublicIp getPublicIpInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.flavor"></a>

```java
public java.lang.String getFlavor();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigOutputReference.property.internalValue"></a>

```java
public AsConfigurationV1InstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfig">AsConfigurationV1InstanceConfig</a>

---


### AsConfigurationV1InstanceConfigPersonalityList <a name="AsConfigurationV1InstanceConfigPersonalityList" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPersonalityList;

new AsConfigurationV1InstanceConfigPersonalityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get"></a>

```java
public AsConfigurationV1InstanceConfigPersonalityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>>

---


### AsConfigurationV1InstanceConfigPersonalityOutputReference <a name="AsConfigurationV1InstanceConfigPersonalityOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPersonalityOutputReference;

new AsConfigurationV1InstanceConfigPersonalityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonalityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPersonality">AsConfigurationV1InstanceConfigPersonality</a>

---


### AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference;

new AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingModeInput">chargingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareTypeInput">shareTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingMode">chargingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareType">shareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chargingModeInput`<sup>Optional</sup> <a name="chargingModeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingModeInput"></a>

```java
public java.lang.String getChargingModeInput();
```

- *Type:* java.lang.String

---

##### `shareTypeInput`<sup>Optional</sup> <a name="shareTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareTypeInput"></a>

```java
public java.lang.String getShareTypeInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `chargingMode`<sup>Required</sup> <a name="chargingMode" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.chargingMode"></a>

```java
public java.lang.String getChargingMode();
```

- *Type:* java.lang.String

---

##### `shareType`<sup>Required</sup> <a name="shareType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.shareType"></a>

```java
public java.lang.String getShareType();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference.property.internalValue"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEipBandwidth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---


### AsConfigurationV1InstanceConfigPublicIpEipOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpEipOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference;

new AsConfigurationV1InstanceConfigPublicIpEipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth">putBandwidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidth` <a name="putBandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth"></a>

```java
public void putBandwidth(AsConfigurationV1InstanceConfigPublicIpEipBandwidth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference">AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidthInput">bandwidthInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipTypeInput">ipTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipType">ipType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidth"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference getBandwidth();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference">AsConfigurationV1InstanceConfigPublicIpEipBandwidthOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.bandwidthInput"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEipBandwidth getBandwidthInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipBandwidth">AsConfigurationV1InstanceConfigPublicIpEipBandwidth</a>

---

##### `ipTypeInput`<sup>Optional</sup> <a name="ipTypeInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipTypeInput"></a>

```java
public java.lang.String getIpTypeInput();
```

- *Type:* java.lang.String

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference.property.internalValue"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEip getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---


### AsConfigurationV1InstanceConfigPublicIpOutputReference <a name="AsConfigurationV1InstanceConfigPublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_configuration_v1.AsConfigurationV1InstanceConfigPublicIpOutputReference;

new AsConfigurationV1InstanceConfigPublicIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip">putEip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEip` <a name="putEip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip"></a>

```java
public void putEip(AsConfigurationV1InstanceConfigPublicIpEip value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.putEip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eip">eip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference">AsConfigurationV1InstanceConfigPublicIpEipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eipInput">eipInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eip`<sup>Required</sup> <a name="eip" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eip"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEipOutputReference getEip();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEipOutputReference">AsConfigurationV1InstanceConfigPublicIpEipOutputReference</a>

---

##### `eipInput`<sup>Optional</sup> <a name="eipInput" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.eipInput"></a>

```java
public AsConfigurationV1InstanceConfigPublicIpEip getEipInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpEip">AsConfigurationV1InstanceConfigPublicIpEip</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIpOutputReference.property.internalValue"></a>

```java
public AsConfigurationV1InstanceConfigPublicIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asConfigurationV1.AsConfigurationV1InstanceConfigPublicIp">AsConfigurationV1InstanceConfigPublicIp</a>

---



