# `opentelekomcloud_smn_subscription_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_smn_subscription_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2).

# `smnSubscriptionV2` Submodule <a name="`smnSubscriptionV2` Submodule" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmnSubscriptionV2 <a name="SmnSubscriptionV2" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2 opentelekomcloud_smn_subscription_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.smn_subscription_v2.SmnSubscriptionV2;

SmnSubscriptionV2.Builder.create(Construct scope, java.lang.String id)
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
    .endpoint(java.lang.String)
    .protocol(java.lang.String)
    .topicUrn(java.lang.String)
//  .id(java.lang.String)
//  .projectName(java.lang.String)
//  .remark(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.topicUrn">topicUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#id SmnSubscriptionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.remark">remark</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#remark SmnSubscriptionV2#remark}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}.

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.topicUrn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#id SmnSubscriptionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}.

---

##### `remark`<sup>Optional</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.Initializer.parameter.remark"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#remark SmnSubscriptionV2#remark}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetProjectName">resetProjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetRemark">resetRemark</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetId"></a>

```java
public void resetId()
```

##### `resetProjectName` <a name="resetProjectName" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetProjectName"></a>

```java
public void resetProjectName()
```

##### `resetRemark` <a name="resetRemark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.resetRemark"></a>

```java
public void resetRemark()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.smn_subscription_v2.SmnSubscriptionV2;

SmnSubscriptionV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.smn_subscription_v2.SmnSubscriptionV2;

SmnSubscriptionV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.smn_subscription_v2.SmnSubscriptionV2;

SmnSubscriptionV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.status">status</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.subscriptionUrn">subscriptionUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remarkInput">remarkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrnInput">topicUrnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remark">remark</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrn">topicUrn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.status"></a>

```java
public java.lang.Number getStatus();
```

- *Type:* java.lang.Number

---

##### `subscriptionUrn`<sup>Required</sup> <a name="subscriptionUrn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.subscriptionUrn"></a>

```java
public java.lang.String getSubscriptionUrn();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `remarkInput`<sup>Optional</sup> <a name="remarkInput" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remarkInput"></a>

```java
public java.lang.String getRemarkInput();
```

- *Type:* java.lang.String

---

##### `topicUrnInput`<sup>Optional</sup> <a name="topicUrnInput" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrnInput"></a>

```java
public java.lang.String getTopicUrnInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `remark`<sup>Required</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.remark"></a>

```java
public java.lang.String getRemark();
```

- *Type:* java.lang.String

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.topicUrn"></a>

```java
public java.lang.String getTopicUrn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SmnSubscriptionV2Config <a name="SmnSubscriptionV2Config" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.smn_subscription_v2.SmnSubscriptionV2Config;

SmnSubscriptionV2Config.builder()
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
    .endpoint(java.lang.String)
    .protocol(java.lang.String)
    .topicUrn(java.lang.String)
//  .id(java.lang.String)
//  .projectName(java.lang.String)
//  .remark(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.topicUrn">topicUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#id SmnSubscriptionV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.projectName">projectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.remark">remark</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#remark SmnSubscriptionV2#remark}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#endpoint SmnSubscriptionV2#endpoint}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#protocol SmnSubscriptionV2#protocol}.

---

##### `topicUrn`<sup>Required</sup> <a name="topicUrn" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.topicUrn"></a>

```java
public java.lang.String getTopicUrn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#topic_urn SmnSubscriptionV2#topic_urn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#id SmnSubscriptionV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#project_name SmnSubscriptionV2#project_name}.

---

##### `remark`<sup>Optional</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.smnSubscriptionV2.SmnSubscriptionV2Config.property.remark"></a>

```java
public java.lang.String getRemark();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.0/docs/resources/smn_subscription_v2#remark SmnSubscriptionV2#remark}.

---



