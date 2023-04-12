# `dataOpentelekomcloudKmsDataKeyV1` Submodule <a name="`dataOpentelekomcloudKmsDataKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudKmsDataKeyV1 <a name="DataOpentelekomcloudKmsDataKeyV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1 opentelekomcloud_kms_data_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudkmsdatakeyv1"

dataopentelekomcloudkmsdatakeyv1.NewDataOpentelekomcloudKmsDataKeyV1(scope Construct, id *string, config DataOpentelekomcloudKmsDataKeyV1Config) DataOpentelekomcloudKmsDataKeyV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config">DataOpentelekomcloudKmsDataKeyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config">DataOpentelekomcloudKmsDataKeyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetEncryptionContext">ResetEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEncryptionContext` <a name="ResetEncryptionContext" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetEncryptionContext"></a>

```go
func ResetEncryptionContext()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudkmsdatakeyv1"

dataopentelekomcloudkmsdatakeyv1.DataOpentelekomcloudKmsDataKeyV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudkmsdatakeyv1"

dataopentelekomcloudkmsdatakeyv1.DataOpentelekomcloudKmsDataKeyV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudkmsdatakeyv1"

dataopentelekomcloudkmsdatakeyv1.DataOpentelekomcloudKmsDataKeyV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cipherText">CipherText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.plainText">PlainText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLengthInput">DatakeyLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContextInput">EncryptionContextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLength">DatakeyLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContext">EncryptionContext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CipherText`<sup>Required</sup> <a name="CipherText" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cipherText"></a>

```go
func CipherText() *string
```

- *Type:* *string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.plainText"></a>

```go
func PlainText() *string
```

- *Type:* *string

---

##### `DatakeyLengthInput`<sup>Optional</sup> <a name="DatakeyLengthInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLengthInput"></a>

```go
func DatakeyLengthInput() *string
```

- *Type:* *string

---

##### `EncryptionContextInput`<sup>Optional</sup> <a name="EncryptionContextInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContextInput"></a>

```go
func EncryptionContextInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `DatakeyLength`<sup>Required</sup> <a name="DatakeyLength" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLength"></a>

```go
func DatakeyLength() *string
```

- *Type:* *string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContext"></a>

```go
func EncryptionContext() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudKmsDataKeyV1Config <a name="DataOpentelekomcloudKmsDataKeyV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudkmsdatakeyv1"

&dataopentelekomcloudkmsdatakeyv1.DataOpentelekomcloudKmsDataKeyV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatakeyLength: *string,
	KeyId: *string,
	EncryptionContext: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.datakeyLength">DatakeyLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#datakey_length DataOpentelekomcloudKmsDataKeyV1#datakey_length}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#key_id DataOpentelekomcloudKmsDataKeyV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.encryptionContext">EncryptionContext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#encryption_context DataOpentelekomcloudKmsDataKeyV1#encryption_context}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#id DataOpentelekomcloudKmsDataKeyV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatakeyLength`<sup>Required</sup> <a name="DatakeyLength" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.datakeyLength"></a>

```go
DatakeyLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#datakey_length DataOpentelekomcloudKmsDataKeyV1#datakey_length}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#key_id DataOpentelekomcloudKmsDataKeyV1#key_id}.

---

##### `EncryptionContext`<sup>Optional</sup> <a name="EncryptionContext" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.encryptionContext"></a>

```go
EncryptionContext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#encryption_context DataOpentelekomcloudKmsDataKeyV1#encryption_context}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/kms_data_key_v1#id DataOpentelekomcloudKmsDataKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



